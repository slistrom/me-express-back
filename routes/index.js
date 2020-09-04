var express = require('express');
var router = express.Router();

const metext =`<h1>My jsramverk me-page</h1>
            <img class="profileImg" alt="Me in the woods" src="me.jpg" />
            <p>Detta är min me-sida i kursen jsramverk. Men vem är Stefan och varför är han här?</p>
            <p>Namnet Stefan betyder krönt, och passar väl in på den självkrönta kungen av Stockholms djupaste betongdjungel. Stefan växte upp i storstadens förorter och migrerade runt i de tre vädersträcken.</p>
            <p>Efter att ha springit runt som en tok, hoppat över häckar och svingat sig i stavlianer i kyla, regn och rusk bar det av till varmare breddgrader. I landet ner under sken solens gyllene strålar rakt in i ögonen på den stackars pojken, trots allt kisande fick han dock upp ögonen för den så kallade informations teknologin. Vilket under, vilken potential!</p>
            <p>Det tog några år att banka in tillräckligt i skallen för att han skulle känna sig redo att åter bege sig norrut till de mörka hemvisterna för vikingar, gnyttar och troll. Lagom till att korståget nådde granitens stabila land sprack dock den uppblåsta bubblan. Det var svårt att få kneg på den tiden så Stefan fick driva runt och förlita sig på allmosor från väl sinnade medmänniskor.</p>
            <p>Efter vad som kändes en evighet lyckades han hoppa in i hamsterhjulets förgyllda snurra. Där lyckades han koppla in sig direkt i de digitala paketens förtrollade värld. Att likt en dirigent styra runt hela stackens nivåer vart än i världen de skickades blev för Stefan en andra natur. Åren passerade och visdomens fördjupande kan ifrågasättas, men en sak var säker, Stefan kände att något saknades i denna dekonstruerande samhällsstruktur!</p>
            <p>Stefan bestämde sig för att bege sig ut på en metamodern resa i de gamla filosofernas fotspår, han frågade sig ifall den digitala legoguden kunde lösa de komplicerade problem vi alla står inför. Svaret låter vänta på sig, men detta är första steget att lära sig bygga en digital närvaro som förhoppningsvis skall leda till Eiffeltornets grandiosa liknelse.</p>
            <p>Det har gått över 11 trillioner svängningar i atomuren sedan Stefan kom ner till denna jord. Han är nu redo att anta utmaningen att snickra ihop en hemsida eller två. När han inte snickrar på hemsidor befinner han sig i den myggrika skogen i mitten av landet och snickrar på sin lilla stuga tillsammans med hans älskade sambo.</p>`

router.get('/', function(req, res, next) {
    const data = {
        data: {
            msg: metext
        }
    };

    res.json(data);
});

module.exports = router;
