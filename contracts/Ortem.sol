//SPDX-License-Identifier: Unlicense

pragma solidity  ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Ortem is Ownable {
	Counters.Counter uIDs;
	using Counters for Counters.Counter;
	struct uData {
		string data;
	}

	mapping(uint256 => uData) public users;

	function addUser(string memory _data) external onlyOwner returns (uint256 id) {
		id = uIDs.current();
		uData memory u = uData(_data);
		users[id] = u;
		uIDs.increment();	
	}
}
