AFRAME.registerComponent("info", {
    schema:{
        infoId : {type:"string",default:""}
    },

    createBanner: function(){
        mangaInfo = {
            dn:{
                title:"Death Note",
                url:"",
                description:"The series centers around a high school student who discovers a supernatural notebook \n\ that allows him to kill anyone by writing the victim's name while picturing their face.",
                author:"Tsugumi Ohba"
            },
            aot:{
                title:"Shingeki No Kyojin",
                url:"",
                description:"It’s about the last known bastion of human civilization,\n\ which is under siege by man-eating giants known as Titans.\n\ Eren Yeager, a boy who lost his mother and home when the Titans breached the outer layer of the walls, \n\ swears to wipe out the Titans and reclaim the world for humanity.",
                author:"Hajime Isayama"
            },
            mdzs:{
                title:"Grandmaster of Demonic Cultivation \n\ Mo Dao Zu Shi",
                url:"",
                description:"Wei WuXian and Lan WangJi meet during a magical training and start working together to solve many mysteries. \n\ As the grand-master who founded the Demonic Sect,\n\ Wei Wuxian roamed the world in his wanton ways, \n\ hated by millions for the chaos he created.",
                author:"Mo Xiang Tong Xiu"
            },
            blue_exorcist:{
                title:"Ao No Exorcist",
                url:"",
                description:"The story revolves around Rin Okumura, \n\ a teenager who discovers he and his twin brother Yukio \n\ are the sons of Satan, born from a human woman, \n\ and he is the inheritor of Satan's powers.",
                author:"Kazue Kato"
            },
            drrr:{
                title:"Durarara!!",
                url:"",
                description:"\n\ Story of a dullahan working as an underworld courier in Ikebukuro,\n\ an internet-based anonymous gang called the Dollars, \n\ and the chaos that unfolds around the most dangerous people in Ikebukuro.",
                author:"Ryoga Narita"
            },
        }
    }
})