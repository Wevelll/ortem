import { ortemAddr} from "../hardhat.config"; 
import { task } from "hardhat/config"

task("getUser", "Gets string from user")
.addParam("id", "ID of needed user")
.setAction(async (taskArgs, hre) => {
    const [me] = await hre.ethers.getSigners();
    const Ortem = await hre.ethers.getContractAt("Ortem", ortemAddr);
    const s = await Ortem.connect(me).users(taskArgs.id);
    console.log("result: ", s);
});