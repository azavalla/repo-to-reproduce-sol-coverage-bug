pragma solidity ^0.4.25;


import "./SafeMath.sol";


contract TestHelper {
    /**
     * @dev wrapper. see `SafeMath` contract
     */
    function mul(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.mul(a, b);
    }

    /**
     * @dev wrapper. see `SafeMath` contract
     */
    function div(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.div(a, b);
    }

    /**
     * @dev wrapper. see `SafeMath` contract
     */
    function sub(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.sub(a, b);
    }

    /**
     * @dev wrapper. see `SafeMath` contract
     */
    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return SafeMath.add(a, b);
    }
}
