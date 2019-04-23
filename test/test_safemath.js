const chai = require('chai')
const { MAX_UINT32, MAX_UINT256 } = require('./constants')
const TestHelper = artifacts.require('./TestHelper')
const { fails, reverts, ErrorType } = require('truffle-assertions')

chai.use(require('chai-bignumber')(BigNumber)).should()
BigNumber.config({
  ROUNDING_MODE: BigNumber.ROUND_DOWN, // Rounds towards zero, ie. truncate
  DECIMAL_PLACES: 0 // Integer results
})

describe('SafeMath', function () {
  var testhelper

  before(async () => {
    testhelper = await TestHelper.deployed()
    return testhelper
  })

  describe('uint256 arithmetic', () => {
    describe('add256', function () {
      it('adds correctly', async function () {
        const a = new BigNumber('12345')
        const b = new BigNumber('85937')
        const c = a.add(b)

        c.should.be.bignumber.equal(await testhelper.add(a, b))
      })

      it('correctly adds up to maximum value', async () => {
        const a = MAX_UINT256.minus(1)
        const b = new BigNumber('1')
        const c = a.add(b)

        c.should.be.bignumber.equal(await testhelper.add(a, b))
      })

      it('reverts on overflow', async function () {
        const a = MAX_UINT256
        const b = new BigNumber('1')

        await reverts(testhelper.add(a, b))
      })
    })

    describe('sub256', function () {
      it('subtracts correctly', async function () {
        const a = new BigNumber('12345')
        const b = new BigNumber('85937')
        const c = b.sub(a)

        c.should.be.bignumber.equal(await testhelper.sub(b, a))
      })

      it('reverts if subtrahend > minuend', async function () {
        const a = new BigNumber('12345')
        const b = new BigNumber('85937')

        await reverts(testhelper.sub(a, b))
      })
    })

    describe('mul256', function () {
      it('multiplies correctly', async function () {
        const a = new BigNumber('12345')
        const b = new BigNumber('85937')
        const c = a.mul(b)

        c.should.be.bignumber.equal(await testhelper.mul(a, b))
      })

      it('reverts on overflow', async function () {
        const a = MAX_UINT256
        const b = new BigNumber('2')

        await reverts(testhelper.mul(a, b))
      })

      it('multiplies by zero correctly', async function () {
        const a = new BigNumber('12345')
        const b = new BigNumber('0');

        (await testhelper.mul(a, b)).should.be.bignumber.equal(0);
        (await testhelper.mul(b, a)).should.be.bignumber.equal(0)
      })
    })
    describe('div256', function () {
      it('divides correctly when remainder == 0', async () => {
        const a = new BigNumber('12345')
        const b = new BigNumber('5')
        const c = a.div(b)

        c.should.be.bignumber.equal(await testhelper.div(a, b))
      })

      it('divides correctly when remainder != 0', async () => {
        const a = new BigNumber('12345')
        const b = new BigNumber('4')
        const c = a.div(b)

        c.should.be.bignumber.equal(await testhelper.div(a, b))
      })

      it('reverts when divisor is zero', async () => {
        await fails(testhelper.div(12345, 0), ErrorType.INVALID_OPCODE)
      })

      it('divides zero correctly', async function () {
        const a = new BigNumber('12345');

        (await testhelper.div(0, a)).should.be.bignumber.equal(0)
      })
    })
  })
})
