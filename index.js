'use strict'

//const insta = require('./func.js');
const Client = require('instagram-private-api').V1;
const delay = require('delay');
const chalk = require('chalk');
const inquirer = require('inquirer');
//const Spinner = require('cli-spinner').Spinner;

const questionTools = [
  {
    type:"list",
    name:"Tools",
    message:"Select tools:",
    choices:
      [
        "[1] Follow Followers Target",
        "[2] Follow Account By Media",
        "[3] Follow Account By Hastag",
        "[4] Follow Account By Location",
        "[5] Follow Account Comment-Direct Message",
        "[6] Follow Followers Target [OLD]",
        "[7] Comment And Like By Hastag",
        "[8] Comment Like And Direct Message",
        "[9] Comment And Like By Target",
        "[10] Bom Comment Target",
        "[11] Bot Like V.1",
        "[12] Bot Like V.2",
        "[13] Unfollow Not Followback",
        "[14] Unfollow All Following",
        "[15] Delete All Media",
        "[16] [NEW] Bom Like Target",
        "[17] [NEW] Follow Followers Target [AUTOKOMEN]",
        "[18] [NEW] Follow Followers Target [FOLLOW+LIKE]",
        "\n"
      ]
  }
]

const main = async () => {
  var spinner;
  try{
    var toolChoise = await inquirer.prompt(questionTools);
    toolChoise = toolChoise.Tools;
    switch(toolChoise){
      case "[1] Follow Followers Target":
        const followfollowerstarget = require('./Tools/followfollowerstarget.js');
        await followfollowerstarget();
        break;

      case "[2] Follow Account By Media":
        const followaccountbymedia = require('./Tools/followaccountbymedia.js');
        await followaccountbymedia();
        break;

      case "[3] Follow Account By Hastag":
        const followaccountbyhastag = require('./Tools/followaccountbyhastag.js');
        await followaccountbyhastag();
        break;

      case "[4] Follow Account By Location":
        const followaccountbyLocation = require('./Tools/followaccountbyLocation.js');
        await followaccountbyLocation();
        break;

      case "[5] Follow Account Comment-Direct Message":
        const followcommentdm = require('./Tools/followcommentdm.js');
        await followcommentdm();
        break;

      case "[6] Follow Followers Target [OLD]":
        const followfollowersold = require('./Tools/followfollowersold.js');
        await followfollowersold();
        break;

      case "[7] Comment And Like By Hastag":
        const komenlike = require('./Tools/komenlike.js');
        await komenlike();
        break;

      case "[8] Comment Like And Direct Message":
        const commentlikedm = require('./Tools/commentlikedm.js');
        await commentlikedm();
        break;

      case "[9] Comment And Like By Target":
        const likekomen = require('./Tools/likekomen.js');
        await likekomen();
        break;

		case "[10] Bom Comment Target":
        const bomkomen = require('./Tools/bomkomen.js');
        await bomkomen();
        break;

		case "[11] Bot Like V.1":
        const botlike = require('./Tools/botlike.js');
        await botlike();
        break;

		case "[12] Bot Like V.2":
        const botlike2 = require('./Tools/botlike2.js');
        await botlike2();
        break;

		case "[13] Unfollow Not Followback":
        const unfollownotfollowback = require('./Tools/uunfollownotfollowback.js');
        await unfollownotfollowback();
        break;

		case "[14] Unfollow All Following":
        const unfollowallfollowing = require('./Tools/unfollowallfollowing.js');
        await unfollowallfollowing();
        break;

		case "[15] Delete All Media":
        const deleteallmedia = require('./Tools/deleteallmedia.js');
        await deleteallmedia();
        break;

    case "[16] [NEW] Bom Like Target":
        const bomlike = require('./Tools/bomlike.js');
        await bomlike();
        break;

    case "[17] [NEW] Follow Followers Target [AUTOKOMEN]":
        const followfollowerstarget2 = require('./Tools/followfollowerstarget2.js');
        await followfollowerstarget2();
        break;

    case "[18] [NEW] Follow Followers Target [FOLLOW+LIKE]":
        const followlike = require('./Tools/followlike.js');
        await followlike();
        break;

		default:
        console.log('\nERROR:\n[?] Aw, Snap! \n[!] Something went wrong while displaying this program!\n[!] Please try again!');
    }
  } catch(e) {
    //spinner.stop(true);
    //console.log(e);
  }
}

console.log(chalk`
  {bold.yellow
  ╦┌┐┌┌─┐┌┬┐┌─┐┌─┐┬─┐┌─┐┌┬┐
  ║│││└─┐ │ ├─┤│ ┬├┬┘├─┤│││
  ╩┘└┘└─┘ ┴ ┴ ┴└─┘┴└─┴ ┴┴ ┴
  ╔╦╗┌─┐┌─┐┬  ┌─┐    © 2018
   ║ │ ││ ││  └─┐   SGBTeam 
   ╩ └─┘└─┘┴─┘└─┘   -------       
}
+------------------------------+-------------+-----------+
|{bold.yellow STUCK-CREW[_officialstuckcrew_]}                          |
|{bold.green [✓] Fixing And Testing By PUTUSYNTAX}                    |
|{bold.green [✓] CODE BY CYBER SCREAMER CCOCOT (ccocot@bc0de.net)}    |
|{bold.red [✓] CCOCOT.CO | BC0DE.NET | NAONLAH.NET | WingkoColi}    |
|{bold.red [✓] SGB TEAM REBORN | Zerobyte.id | ccocot@bc0de.net}    |
+------------------------------+-------------+-----------+

      `);

main()
