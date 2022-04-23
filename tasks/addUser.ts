import { ortemAddr} from "../hardhat.config"; 
import { task } from "hardhat/config"

task("addUser", "Adds string to user, returns ID")
.addParam("arg", "String to be saved")
.setAction(async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const Ortem = await hre.ethers.getContractAt("Ortem", ortemAddr);
    const id = await Ortem.connect(me).addUser(taskArgs.arg);
    console.log("added with id: ", id);
});