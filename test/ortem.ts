import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers} from "hardhat";
import { Ortem, Ortem__factory } from "../typechain";

describe("Ortem", function () {
  let owner: SignerWithAddress;
  let p: SignerWithAddress;
  let OrtemC: Ortem;

  before(async function() {
    [owner, p] = await ethers.getSigners();
	  let OFactory = await ethers.getContractFactory("Ortem", owner) as Ortem__factory;
	  OrtemC = await OFactory.deploy();
  } );

  it("Should add user", async function(){
    expect (
      OrtemC.addUser("blah-blah-blah")
    ).to.satisfy;
  } );

  it("Others cannot add users", async function () {
    await expect (
      OrtemC.connect(p).addUser("blah-blah-blah")
    ).to.be.reverted;
  } );

  it("Can get user data by id", async function () {
    expect (
      await OrtemC.users(0)
    ).to.be.equal("blah-blah-blah");
  })
});
