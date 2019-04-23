pragma solidity ^0.4.25;


library SafeMath {
    /**
     * @dev Multiplies two numbers and returns a uint256
     * @param a A number
     * @param b A number
     * @return a * b as a uint256
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * b;
        require(c / a == b);
        return c;
    }

    /**
     * @dev Divides two numbers and returns a uint256
     * @param a A number
     * @param b A number
     * @return a / b as a uint256
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a / b;
        return c;
    }

    /**
     * @dev Substracts two numbers and returns a uint256
     * @param a A number
     * @param b A number
     * @return a - b as a uint256
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        require(b <= a);
        return a - b;
    }

    /**
     * @dev Adds two numbers and returns a uint256
     * @param a A number
     * @param b A number
     * @return a + b as a uint256
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a);
        return c;
    }
}
