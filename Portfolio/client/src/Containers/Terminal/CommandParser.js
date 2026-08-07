export const handleCommand = (command, setOutput, clearTerminal, previousOutput) => {
  const trimmed = command.trim();
  const args = trimmed.split(" ");
  const cmd = args[0].toLowerCase();
  const subArg = args[1] ? args[1].toLowerCase() : "";

  switch (cmd) {
    case "":
      setOutput(previousOutput);
      break;

    case "cls":
      clearTerminal();
      break;

    case "help":
      setOutput(prev => [
        ...prev,
        "   COMMANDES WINDOWS CMD & SYSTÈME :   ",

        "   DIR        Affiche la liste des fichiers et des sous-dossiers.",
        "   CLS        Efface l'écran.",
        "   VER        Affiche la version de Windows.",
        "   IPCONFIG   Affiche la configuration réseau IP.",
        "   SYSTEMINFO Affiche les informations système de la machine.",
        "   TASKLIST   Affiche les processus et tâches en cours.",
        "   NETSTAT    Affiche les connexions réseau actives.",
        "   ARP        Affiche la table de correspondance ARP.",
        "   TRACERT    Trace l'itinéraire vers une cible réseau.",
        "   TREE       Affiche l'arborescence des dossiers du portfolio.",
        "   DATE / TIME Affiche la date ou l'heure système.",
        "   HOSTNAME   Affiche le nom de l'hôte.",
        "   VOL        Affiche le numéro de série du volume.",
        "   ASSOC      Affiche les associations d'extensions.",
        "   ECHO       Affiche un message à l'écran.",
        "   PING       Vérifie la connectivité réseau.",
        "   EXIT       Quitte la session en cours.",
        "",
        "   COMMANDES PROFESSIONNELLES DE HAPPI NGOYO STYVE :   ",
        "   ABOUT      Affiche votre biographie / profil officiel.",
        "   CV         Affiche le CV complet (Formation, Expériences, Compétences).",
        "   CONTACT    Affiche vos informations de contact (Email, Téléphone).",
        "   SKILLS     Affiche vos compétences techniques.",
        "   CYBER      Centre de contrôle cybersécurité.",
        "   JARVIS     Interagit avec votre intelligence artificielle."
      ]);
      break;

    case "dir":
      setOutput(prev => [
        ...prev,
        " Le volume dans le lecteur C s'appelle OS",
        " Le numéro de série du volume est STYV-2026-CYBER",
        "",
        " Répertoire de C:\\Users\\HapiiStyve\\Portfolio",
        "",
        "07/08/2026  12:00    <DIR>    .",
        "07/08/2026  12:00    <DIR>    ..",
        "07/08/2026  12:00             about_me.txt",
        "07/08/2026  12:00             cv_styve.pdf",
        "07/08/2026  12:00             skills.js",
        "07/08/2026  12:00             cybersecurity.exe",
        "07/08/2026  12:00             jarvis_ai.py",
        "             5 fichier(s)            8 192 octets",
        "             2 répertoire(s)  498 214 584 320 octets libres"
      ]);
      break;

    // --- SECTION ABOUT ME & PROFIL (Basé sur le CV) ---
    case "about":
    case "bio":
      setOutput(prev => [
        ...prev,
        "$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%-::----------------------------::...............",
        "$$$$$$$$$$$$$$$$$$$$$$$%=--::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::---------------------------:..-+=::.::.....",
        "$$$$$$$$$$$$$$$$$$$$$$$$*****++==---:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::-----------------::.:*=-==+-+-:-:",
        "$$$$$$$$$$$$$$$$$$$$$$$$**************++==--:::::::::::::::::::::::::::::::::::::::::::::::::::::---======+==---:-----------::.:=+=:+-:*=-*+",
        "$$$$$$$$$$$$$$$$$$$$$$$$**+*****+====***##****++==---::::::::::::::::::::::::::::::::::::::::-=+**#############*+=-:--------::...*--*-+=+==-",
        "$$$$$$$$$$$$$$$$$$$$$$$%*+**=***+++=+*******#*#####****++==---::::::::::::::::::::::::::::-=*#########%%%%%%%%%%%##+-:------::..-+-:+-*=+*++",
        "$$$$$$$$$$$$$$$$$$$$$$$$****=***+*#+=#+******##**#***#*********++===--::::::::::::::::::-+######%%%%%%%%%%%%%%%%%%%%#+-::::-::..==+:--=+=+-=",
        "$$$$$$$$$$$$$$$$$$$$$$$$****+***+***+*=*###****+=*#*++*****************+++==--:::::::::+#####%%%%%%%%%%%%%%%%%%%%%%%%%#+===-::....:-++++++==",
        "$$$$$$$$$$$$$$$$$$$$$$$%-**++****+***#********+**=*#+++**+**********************++==-=##%%%%%%%%%%###*******####%%%%%%%%%###*=.....=+==+==++",
        "$$$$$$$$$$$$$$$$$$$$$$$%=+*++*=+=+##+=***+****#**++*+#*+++#*************************##%%%%%%%##****+++++++++******###%%%%%*+*#+....-+==+++++",
        "$$$$$$$$$$$$$$$$$$$$$$$%++*+***#**#*++=+====*==*=++*+*##**#*###********************#%%%%%%#**+++++++++++++++++++******##%%%*+*+....-+===++++",
        "$$$$$$$$$$$$$$$$$$$$$$$%+*++===+===++*+*+***+*++=+=+=+++++#######******************#%%%%%#*++++++++++++++++++++++*******#%%%**-....-++=+++++",
        "$$$$$$$$$$$$$$$$$$$$$$$$#####*****+++*++===+=+++++*****+++#**####*****************#%%%%##*+++++++++++++++++++++++********#%%%*-....:+*++++++",
        "$$$$$$$$$$$$$$$$$$$$$$$$################******+++++==++#************#************#%%%%##**++++++++====+=+++++++++++*******#%%*+==-:::---===+",
        "$$$$$$$$$$$$$$$$$$$$$$$$*##########################****#**#*#*****####***********#%%%#**+++++=++++===============++++******#%#+**###**++==--.",
        "$$$$$$$$$$$$$$$$$$$$$$$$*###*###################******#####*+#*****########***####%%%#*+++++++********++=======+++***####**#%*=-=+*#######*:",
        "$$$$$$$$$$$$$$$$$$$$$$$$####*****##****#############*#*#****=+==++**##############%%%#*++++++++***####%##**++++*###%###****#%*+===-=+######*",
        "$$$$$$$$$$$$$$$$$$$$$$$$**********=--====+*##*****##**#####**-*=+*==+++=*++****###%%%#+++++++++++****###***++***#####*******#*======-+######",
        "$$$$$$$$$$$$$$$$$$$$$$$$*********+:--=====**=-----=+***+++++*##********+*+++*==#**#%%#++++++*####%%**#***+++++***###%%#*#%***=:-===+==*#####",
        "$$$$$$$$$$$$$$$$$$$$$$$$*********=:-=++---*+::=##+-:+*-:-=-::=******++=+*##**#*#*#++**+++=++++++*##++*+++++=+++***+*##******+========+######",
        "$$$$$$$$$$$$$$$$$$$$$$$$**********=--==---+*-:=**+-:=*::=##+::+****-.:=-::+#+=--=+=***++=======+++++++++++====++**+++++++++++*#***++*#######",
        "$$$$$$$$$$$$$$$$$$$$$$$$******#####**++++*#*+=-----=**-:-++-::+****:.=##=.:*-:-*++*#*+*++==================++=++++++++++++++++*##############",
        "$$$$$$$$$$$$$$$$$$$$$$$$*****################******###*+=----+#+:-*=::=+-.:*-:=#*+#++*+++=====--========+++==+++++++=++++++++*##############",
        "$$$$$$$$$$$$$$$$$$$$$$$%========+=++++************########**#******#*=---=*#*=:-=++****+++=====--====+++===-====++++====+++++*##############",
        "$$$$$$$$$$$$$$$$$$$$$$$%+++*******++++++==========++++++*******###############**+******+++++=========++++***+++++**+++==++++*+##############",
        "$$$$$$$$$$$$$$$$$$$$$%================++++++++++++++++============++++******##########*+++++++=======++**#*******##*+++++++**=*#############",
        "$$$$$$$$$$$$$$$$$$$$$%==+++++++++=======================++++++++++++++=======+++++****+++++++===================+++++++++**=*#############",
        "$$$$$$$$$$$$$$$$$$$$$%+++=++====+=====+=+++++++++++++++++============+++++++++***+++***+++++++===============+++++++++++**+=*#############",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%%%%######******+++++++++++++++++++++++++++********+++++++++++****+++++++==++++++++*******************#############",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%$$%%%%%%%%%%%%%%#######***************************++****+++++++**##****++++*++***##****###*********#####",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%$%%$$$%%%%%%$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%######************+++*++=+=========+++++*********+************",
        "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%$$$$$$$$$$$$$$$$$$$%%#*####****+++=======++++++++++****++++++++++++******",
        "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%***####***++++++++++++++++++**#%##*++******++++++++",
        "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$%+++**##********+++++++++++***#$%%%#++*$$$$%%%%%%###",
        "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$##*+++++*####***+**************##%####=++$$$$$$$$$$$$$",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$#*+++++++***######***#####%%%%###*######+++$$$$$$$%%%%%%",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%$$$$%#++++++++++*%$%########%%%%%%%%##**#%%%###+=+%$$$$$$$$$$$$",
        "$$$$$$$$$$$$$$$$$$$$$$$$%%%%%#######%%%%%%%%%%%%#%########%#####%%%%%%%%%%%%%%%#*+++++++++*#%$$$%%%%############***##%@$%#$$#==%$$$$$$$$$$$$",
        "$$$$$$$$$$$$$$$$$$$$$$$$#################################%%%##%%%%%%%%%%%#***##*+++**###%%$$$$$%%%%$#####*********#%%$@##$@$%+=#$$$$$$$$$$$$",
        "$$$$$$$$$$$$$$$$$$$$$$$$##########################################************#####%%$$$$$%%%%%%#########********#%%$$%%$@@@$#=#%%%%%%%%%%%%",
        "$$$$$$$$$$$$$$$$$$$$$$$$#################################****++++*****+********##%%%###%#%%%%%%%#####%#%##*******#%$$$#%$@@@$%##%#%%%%%%%%%%",
        "$$$$$$$$$$$$$$$$$$$$$$$$########################*****++++++**********************########################%##*****#%%$%%$$$$$%#%#############",
        "$$$$$$$$$$$$$$$$$$$$$$$$#####################***+++++++++++*************************############*################%%%%%$%%%$$%%##############",
        "$$$$$$$$$$$$$$$$$$$$$$$$###################**++++++++*+++*++*************+***************##########****#####%#%%%%%%%#######%%%###*#####****",
        "$$$$$$$$$$$$$$$$$$$$$$$$##################*+++++++++++**++**++**###********#*****###**********#########***####$%%####################**#****",
        "$$$$$$$$$$$$$$$$$$$$$$$$#################+++++++*++++++*******++*#####****+*#**************************#######%%####################********",
        "$$$$$$$$$$$$$$$$$$$$$$$$###############*+++++++++***+++********++*######****###************************##*#######**###############**********",
        "$$$$$$$$$$$$$$$$$$$$$$$$##############*++++++++++*****+*******#**+*######****###***************************######****###****************----",
        "$$$$$$$$$$$$$$$$$$$$$$$$#############*+++++++**++*************###**#######***####***************************######*****#####****************",
        "$$$$$$$$$$$$$$$$$$$$$$$$############*++++++++**++*************###*+*#######***####**************************#%######*****####********#******",
        "$$$$$$$$$$$$$$$$$$$$$$$$###########*++++++++++***************#####***########*#####*************************#%%*#####******#####************",
        "$$$$$$$$$$$$$$$$$$$$$$$$##########*+++++*****************########%#**########*#####**************************#%*#######******#####**********",
        "$$$$$$$$$$$$$$$$$$$$$$$$#########*++++++++++*##*******#**######%%%#***#############*************************##%##########******#########****",
        "$$$$$$$$$$$$$$$$$$$$$$$$###%%%%%*++++++++++++*###*****##**###%%%%%#***########*#####************************###%*#########********#######**#",
        "    À PROPOS DE MOI :   ",
        "HAPPI NGOYO STYVE - Software Engineer Student & Cybersecurity Apprentice.",
        "Étudiant en génie logiciel à l'IUT de Ngaoundéré, avec une solide expérience",
        "dans divers langages de programmation et un engagement constant pour fournir",
        "du code de haute qualité. Doté d'un bon esprit de résolution de problèmes,",
        "j'aime travailler en équipe et relever des défis techniques."
      ]);
      break;

    // --- SECTION CV COMPLET (Basé sur le document officiel fourni) ---
    case "cv":
    case "resume":
      setOutput(prev => [
        ...prev,
        "",
        "                     CURRICULUM VITAE - HAPII NGOYO STYVE :         ",
        "",
        "STATUT : Software Engineer Student / Apprenti Cybersécurité",
        "LOCALISATION : #1 Mbijoro, Ngaoundéré, Cameroun",
        "CONTACTS : +237 698378718 / 674134293 | happychendjou@icloud.com",
        "",
        "--- FORMATION & ÉDUCATION ---",
        "• IUT University, Ngaoundéré (sept 2026 - Juin 2027) : 2ème année universitaire",
        "• GCE Ordinary Level & GCE Advance Level",
        "",
        "--- EXPÉRIENCE PROFESSIONNELLE ---",
        "• Senior Software Developer (Ngaoundéré) :",
        "  - Développement et maintenance de logiciels (Java, Python, C)",
        "  - Livraison réussie de projets logiciels",
        "  - Gestion de produits en librairie / librairie de livres",
        "  - Création d'un chatbot intelligent via API (Jarvis Core)",
        "  - Projets d'administration de bases de données",
        "• Web Developer :",
        "  - Développement d'applications web (HTML, CSS, JavaScript, PHP)",
        "  - Collaboration en équipes pluridisciplinaires",
        "",
        "   COMPÉTENCES & TECHNOLOGIES  ",
        "• Langages : Python, C, C++, Java, JavaScript, HTML, CSS, SQL",
        "• Systèmes : Ligne de commande Linux / Unix, Administration de bases de données",
        "",
        "   LANGUES & HOBBIES  ",
        "• Langues : Anglais, Français",
        "• Hobbies : Écriture, Tennis, Jeux vidéo, Entraide",
        "================================================================"
      ]);
      break;

    // --- SECTION CONTACTS ---
    case "contact":
    case "contacts":
      setOutput(prev => [
        ...prev,
        "   COORDONNÉES DE CONTACT   ",
        "  Email     : happychendjou@icloud.com",
        "  Téléphone : +237 698378718 / 674134293",
        "  Adresse   : #1 Mbijoro, Ngaoundéré, Cameroun"
      ]);
      break;

    case "whoami":
      setOutput(prev => [
        ...prev,
        "STYVE-CYBER-PC\\HapiiStyve",
        "Rôle : Software Engineer Student & Apprenti en Cybersécurité"
      ]);
      break;

    case "skills":
      setOutput(prev => [
        ...prev,
        "Compétences techniques de Styve :",
        "                                    ",
        "• Programmation : Python, C, C++, Java, JavaScript",
        "• Web : HTML, CSS, PHP",
        "• Systèmes & Données : SQL, Administration de bases de données, Linux/Unix",
        "• Sécurité : Analyse et hardening de code"
      ]);
      break;

    case "cyber":
    case "sec":
      setOutput(prev => [
        ...prev,
        "   CENTRE DE CONTRÔLE CYBERÉCURITÉ   ",
        "[!] Statut du Pare-feu : ACTIF (Furtif)",
        "[!] Modules chargés : Python Security Scripts, C++ Memory Scanners, JS Web Auditors",
        "[+] Analyse du réseau : Intégrité des systèmes validée, Styve."
      ]);
      break;

    case "jarvis":
      const jarvisQuery = args.slice(1).join(" ");
      if (!jarvisQuery) {
        setOutput(prev => [
          ...prev,
          "Jarvis : \"À vos ordres, Styve. Je gère vos API et vos protocoles de sécurité. Tapez 'jarvis [message]' pour me parler.\""
        ]);
      } else {
        setOutput(prev => [
          ...prev,
          `Jarvis : "Analyse de la directive '${jarvisQuery}'... Traitement quantique effectué avec succès, chef !"`
        ]);
      }
      break;

    case "matrix":
      setOutput(prev => [
        ...prev,
        "01110011 01110100 01111001 01110110 01100101",
        "Connexion au flux de données global de la Matrice...",
        "Accès autorisé pour : HAPPI NGOYO STYVE."
      ]);
      break;

    // --- COMMANDES WINDOWS NATIVES ---
    case "ver":
    case "version":
      setOutput(prev => [...prev, "Microsoft Windows [version 10.0.26100.2033]"]);
      break;

    case "hostname":
      setOutput(prev => [...prev, "STYVE-CYBER-WORKSTATION"]);
      break;

    case "vol":
      setOutput(prev => [
        ...prev,
        " Le volume dans le lecteur C s'appelle OS",
        " Le numéro de série du volume est 4A28-9B11"
      ]);
      break;

    case "netstat":
      setOutput(prev => [
        ...prev,
        "Connexions actives",
        "",
        "  Proto  Adresse locale          Adresse distante       État",
        "  TCP    127.0.0.1:3000          0.0.0.0:0              ECOUTE",
        "  TCP    192.168.1.45:443        142.250.185.46:443     ETabli (Jarvis Core)"
      ]);
      break;

    case "arp":
      setOutput(prev => [
        ...prev,
        "Interface : 192.168.1.45 --- 0x2",
        "  Adresse Internet      Adresse physique    Type",
        "  192.168.1.1           9c-53-22-10-88-14   dynamique"
      ]);
      break;

    case "tracert":
      const hostTarget = args[1] || "cybersecurity.local";
      setOutput(prev => [
        ...prev,
        `Détermination de l'itinéraire vers ${hostTarget} avec un maximum de 3 sauts :`,
        "  1     1 ms     1 ms     1 ms  gateway.local [192.168.1.1]",
        "  2     4 ms     3 ms     3 ms  core-router-cyber.net [10.0.0.1]",
        "Itinéraire déterminé avec succès."
      ]);
      break;

    case "systeminfo":
      setOutput(prev => [
        ...prev,
        "Nom de l'hôte :                    STYVE-CYBER-PC",
        "Nom du système d'exploitation : Microsoft Windows 11 Pro",
        "Mémoire physique totale :       32 768 Mo"
      ]);
      break;

    case "tree":
      setOutput(prev => [
        ...prev,
        "C:.",
        "├── 📁 .vscode",
        "├── 📁 Resources",
        "└── 📁 client",
        "    ├── 📁 public",
        "    └── 📁 src"
      ]);
      break;

    case "ipconfig":
      setOutput(prev => [
        ...prev,
        "Configuration IP de Windows",
        "   Adresse IPv4. . . . . . . . . . . . . : 192.168.1.45",
        "   Masque de sous-réseau. . . . . . . . : 255.255.255.0"
      ]);
      break;

    case "tasklist":
      setOutput(prev => [
        ...prev,
        "Nom de l'image                     PID Session        Mémoire",
        "explorer.exe                      4520 Console       142 500 Ko",
        "jarvis_ai.py                      1337 Console        88 900 Ko"
      ]);
      break;

    case "date":
      setOutput(prev => [...prev, "La date du jour : Fri 08/07/2026"]);
      break;

    case "time":
      setOutput(prev => [...prev, "L'heure actuelle : 12:16:00,00"]);
      break;

    case "assoc":
      setOutput(prev => [...prev, ".py=PythonFile", ".js=JScriptFile", ".html=HTMLFile"]);
      break;

    case "echo":
      const message = trimmed.substring(4).trim();
      setOutput(prev => [...prev, message]);
      break;

    case "ping":
      const target = args[1] || "localhost";
      setOutput(prev => [
        ...prev,
        `Envoi d'une requête 'ping' sur ${target} avec 32 octets de données :`,
        `Réponse de ${target} : octets=32 temps<1ms TTL=128`
      ]);
      break;

    case "clear":
      setOutput(prev => [...prev, "Fermeture de la session en cours..."]);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      break;

    default:
      setOutput(prev => [
        ...prev,
        `'${trimmed}' n'est pas reconnu en tant que commande interne`,
        "ou externe, un programme exécutable ou un fichier de commandes.",
        "Tapez 'help' pour afficher la liste des commandes."
      ]);
  }
};
