const noLangs = [
  {
    title: 'Mainframes to Minis to Micros',
    links: ['https://archive.org/details/MainFram1984'],
  },
  {
    title: 'Integrated Software',
    links: ['https://archive.org/details/Integrat1984'],
  },
  {
    title: 'Computer Music',
    links: ['https://archive.org/details/Computer1984'],
  },
  {
    title: 'Computer Simulations',
    links: ['https://archive.org/details/Simulati1984'],
  },
  {
    title: 'Operating Systems',
    links: ['https://archive.org/details/Operatin1984'],
  },
  {
    title: 'Word Processing',
    links: ['https://archive.org/details/WordProc1984'],
  },
  {
    title: 'Computer Security',
    links: ['https://archive.org/details/Computer1984_2'],
  },
  {
    title: 'Robotics',
    links: ['https://archive.org/details/Robotics1984'],
  },
  {
    title: 'Speech Synthesis',
    links: ['https://archive.org/details/SpeechSy1984'],
  },
  {
    title: 'Local Area Networks',
    links: ['https://archive.org/details/Networki1984'],
  },
  {
    title: 'Microchip Technology',
    links: ['https://archive.org/details/Microchi1984'],
  },
  {
    title: 'Business Applications',
    links: ['https://archive.org/details/Business1984'],
  },
  {
    title: 'Storage Devices',
    links: ['https://archive.org/details/StorageD1984'],
  },
  {
    title: 'Printers',
    links: ['https://archive.org/details/Printers1984'],
  },
  {
    title: 'Database Software',
    links: ['https://archive.org/details/Database1984'],
  },
  {
    title: 'Computer Graphics (1984)',
    links: ['https://archive.org/details/Computer1984_6'],
  },
  {
    title: 'Decision Support Systems',
    links: ['https://archive.org/details/Decision1984'],
  },
  {
    title: 'Computer Ergonomics (1984)',
    links: ['https://archive.org/details/Computer1984_3'],
  },
  {
    title: 'Programming Languages (1984)',
    links: ['https://archive.org/details/Programm1984'],
  },
  {
    title: 'Software Utilities',
    links: ['https://archive.org/details/ccs01e08utilities'],
  },
  {
    title: 'Computer Games (1984)',
    links: ['https://archive.org/details/Computer1984_4'],
  },
  {
    title: 'Computer Entrepreneurs',
    links: [
      'https://archive.org/details/Computer1984_5',
      'https://archive.org/details/CC122ComputerEntrepreneurs',
    ],
  },
  {
    title: 'Fifth Generation Computers',
    links: ['https://archive.org/details/FifthGen1984'],
  },
  {
    title: 'Super Computers',
    links: ['https://archive.org/details/CC126_supercomputers'],
  },
  {
    title: 'Artificial Intelligence (1984)',
    links: [
      'https://archive.org/details/CC1024_artificial_intelligence',
      'https://archive.org/details/Artifici1984',
    ],
  },
  {
    title: 'Computers in Education',
    links: ['https://archive.org/details/education_2'],
  },
  {
    title: 'Laser Disk Storage',
    links: ['https://archive.org/details/Lasersan1985'],
  },
  {
    title: 'Portable Computers',
    links: [
      'https://archive.org/details/portablecomp',
      'https://archive.org/details/CC214_portable_computers',
    ],
  },
  {
    title: 'Computer Games (1985)',
    links: ['https://archive.org/details/Computer1985_6'],
  },
  {
    title: 'IBM Compatibles',
    links: ['https://archive.org/details/IBMClone1985'],
  },
  {
    title: 'Software Piracy',
    links: ['https://archive.org/details/Software1985'],
  },
  {
    title: 'Computers and the Disabled (1985)',
    links: ['https://archive.org/details/Computer1985_7'],
  },
  {
    title: 'UNIX (1985)',
    links: ['https://archive.org/details/UNIX1985'],
  },
  {
    title: 'Computers and Sports (1985)',
    links: ['https://archive.org/details/Computer1985_8'],
  },
  {
    title: 'Personal Finance Software (1985)',
    links: ['https://archive.org/details/Personal1985'],
  },
  {
    title: 'The Macintosh Computer',
    links: ['https://archive.org/details/TheMacin1985'],
  },
  {
    title: 'IBM',
    links: ['https://archive.org/details/Profileo1985'],
  },
  {
    title: 'Computers and Communications',
    links: ['https://archive.org/details/Computer1985_9'],
  },
  {
    title: 'Low End Computers',
    links: ['https://archive.org/details/LowEndCo1985'],
  },
  {
    title: 'Japanese PCs',
    links: ['https://archive.org/details/Japanese1985'],
  },
  {
    title: 'Japanese Computer Technology',
    links: ['https://archive.org/details/Robots-J1985'],
  },
  {
    title: 'Computer Graphics (1985)',
    links: ['https://archive.org/details/Computer1985_10'],
  },
  {
    title: 'Slowdown in Silicon Valley: Part 1',
    links: ['https://archive.org/details/Slowdown1985'],
  },
  {
    title: 'Slowdown in Silicon Valley: Part 2',
    links: ['https://archive.org/details/Slowdown1985_2'],
  },
  {
    title: 'Women in Computing',
    links: ['https://archive.org/details/WomeninC1985'],
  },
  {
    title: 'Printers & Business Graphics',
    links: ['https://archive.org/details/Printers1985'],
  },
  {
    title: 'Computers and the Law',
    links: [],
  },
  {
    title: 'Programming & Programmers',
    links: [],
  },
  {
    title: 'Computers in the Media',
    links: ['https://archive.org/details/Computer1985_2'],
  },
  {
    title: 'Modems & Bulletin Boards',
    links: ['https://archive.org/details/ModemsBu1985'],
  },
  {
    title: 'Computer Networks',
    links: ['https://archive.org/details/Computer1985_3'],
  },
  {
    title: 'Computers and Politics (1985)',
    links: ['https://archive.org/details/Computer1985_4'],
  },
  {
    title: 'Computers and Medicine',
    links: ['https://archive.org/details/Computer1985_5'],
  },
  {
    title: 'Optical Storage Devices',
    links: ['https://archive.org/details/OpticalS1985'],
  },
  {
    title: 'Business Applications (1985)',
    links: ['https://archive.org/details/Business1985'],
  },
  {
    title: 'Amiga and Atari',
    links: ['https://archive.org/details/Amigaand1985'],
  },
  {
    title: 'Christmas Buyers Guide (1985)',
    links: ['https://archive.org/details/Christma1985'],
  },
  {
    title: 'Hard Disk Storage',
    links: ['https://archive.org/details/HardDisk1985'],
  },
  {
    title: 'Artificial Intelligence (1986)',
    links: ['https://archive.org/details/Artifici1986'],
  },
  {
    title: 'Computers in Law Enforcement',
    links: ['https://archive.org/details/Computer1986'],
  },
  {
    title: 'Investment Software',
    links: ['https://archive.org/details/Investme1986'],
  },
  {
    title: 'Psychological Software',
    links: ['https://archive.org/details/Psycholo1986'],
  },
  {
    title: 'Astronomy Software',
    links: ['https://archive.org/details/Astronom1986'],
  },
  {
    title: 'Color and Computing',
    links: [],
  },
  {
    title: 'Careers in Computing',
    links: ['https://archive.org/details/Careersi1986'],
  },
  {
    title: 'Parallel Processing',
    links: ['https://archive.org/details/Parallel1986'],
  },
  {
    title: 'Computers and the Pentagon: Part 1',
    links: ['https://archive.org/details/Computer1986_2'],
  },
  {
    title: 'Computers and the Pentagon: Part 2',
    links: ['https://archive.org/details/Computer1986_3'],
  },
  {
    title: 'Educational Software: Part 1',
    links: ['https://archive.org/details/Educatio1986'],
  },
  {
    title: 'Educational Software: Part 2',
    links: ['https://archive.org/details/Educatio1986_2'],
  },
  {
    title: 'MIDI Music',
    links: ['https://archive.org/details/MIDIMusi1986'],
  },
  {
    title: 'RISC\nRISC Processors',
    links: ['https://archive.org/details/RISC1986'],
  },
  {
    title: 'Utilities',
    links: ['https://archive.org/details/Utilitie1986'],
  },
  {
    title: 'Second Hand Computers',
    links: ['https://archive.org/details/SecondHa1986'],
  },
  {
    title: 'Desktop Publishing: Part 1',
    links: ['https://archive.org/details/DesktopP1986'],
  },
  {
    title: 'Desktop Publishing: Part 2',
    links: ['https://archive.org/details/DesktopP1987'],
  },
  {
    title: 'Guide to Macros\nSoftware Macros',
    links: ['https://archive.org/details/GuidetoM1986'],
  },
  {
    title: 'RAM Resident Software',
    links: ['https://archive.org/details/RAMResid1986'],
  },
  {
    title: 'Comdex Special (1986)',
    links: ['https://archive.org/details/ComdexSp1986'],
  },
  {
    title: 'Project Management Software',
    links: ['https://archive.org/details/ProjectM1986'],
  },
  {
    title: 'Christmas Buyers Guide (1986)',
    links: ['https://archive.org/details/Christma1986'],
  },
  {
    title: 'Electronic Mail\nE-Mail Applications',
    links: ['https://archive.org/details/Electron1986'],
  },
  {
    title: '386: The Fast Lane\nIntel 386 Microprocessor',
    links: ['https://archive.org/details/Intel3861987'],
  },
  {
    title: 'On-Line Services: Part 1',
    links: ['https://archive.org/details/On-LineD1987'],
  },
  {
    title: 'On-Line Services: Part 2',
    links: ['https://archive.org/details/On-LineD1987_2'],
  },
  {
    title: 'Intelligent Buildings',
    links: ['https://archive.org/details/Intellig1987'],
  },
  {
    title: 'Modems',
    links: [],
  },
  {
    title: 'Speech Recognition & Synthesis',
    links: ['https://archive.org/details/SpeechRe1987'],
  },
  {
    title: 'Tax Preparation Software (1987)',
    links: ['https://archive.org/details/TaxPrepa1987'],
  },
  {
    title: 'Portable Computers',
    links: ['https://archive.org/details/Portable1987'],
  },
  {
    title: 'Computers and Kids (1987)\nComputer Kids',
    links: ['https://archive.org/details/Komputer1987'],
  },
  {
    title: 'Computers and the Arts',
    links: ['https://archive.org/details/Computer1987'],
  },
  {
    title: 'Computers and Illiteracy',
    links: ['https://archive.org/details/Computer1987_2'],
  },
  {
    title: 'Computers and Gambling',
    links: ['https://archive.org/details/Computer1987_3'],
  },
  {
    title: 'Business Applications: Part 1 – Word Processors',
    links: ['https://archive.org/details/Business1987'],
  },
  {
    title: 'Business Applications: Part 2 – Spreadsheets 1',
    links: ['https://archive.org/details/Business1987_2'],
  },
  {
    title: 'Business Applications: Part 3 – Spreadsheets 2',
    links: ['https://archive.org/details/Business1987_3'],
  },
  {
    title: 'Business Applications: Part 4 – Database Management Software',
    links: ['https://archive.org/details/Business1987_4'],
  },
  {
    title: 'The New Macs',
    links: ['https://archive.org/details/TheNewMa1987'],
  },
  {
    title: 'IBM PS/2',
    links: ['https://archive.org/details/IBMPerso1987'],
  },
  {
    title: 'Super Computers (1987)',
    links: ['https://archive.org/details/SuperCom1987'],
  },
  {
    title: 'PC Clones from Asia',
    links: ['https://archive.org/details/CC434_asian_clones'],
  },
  {
    title: 'HyperCard',
    links: ['https://archive.org/details/CC501_hypercard'],
  },
  {
    title: 'Laser Printers',
    links: ['https://archive.org/details/laserprinter'],
  },
  {
    title: 'Comdex Special (1987)',
    links: ['https://archive.org/details/comdex_2'],
  },
  {
    title: 'Local Area Networks: Part 1 – IBM Compatibles',
    links: ['https://archive.org/details/networks1'],
  },
  {
    title: 'Local Area Networks: Part 2 – Apple',
    links: ['https://archive.org/details/networks2'],
  },
  {
    title: 'Consumer Buying Guide (1987)',
    links: ['https://archive.org/details/CC506_buyers_guide'],
  },
  {
    title: 'Mac Business Software',
    links: ['https://archive.org/details/macbussoftwa'],
  },
  {
    title: 'Computer Games: Part 1',
    links: ['https://archive.org/details/games1'],
  },
  {
    title: 'Computer Games: Part 2',
    links: ['https://archive.org/details/games2'],
  },
  {
    title: 'Decision Support Software',
    links: ['https://archive.org/details/decisionsoft'],
  },
  {
    title: 'PC Imaging',
    links: ['https://archive.org/details/imaging_2'],
  },
  {
    title: 'MacWorld San Francisco (1988)',
    links: ['https://archive.org/details/macworld_3'],
  },
  {
    title: 'The New Amigas',
    links: ['https://archive.org/details/amiga_2'],
  },
  {
    title: 'CD-ROMs',
    links: ['https://archive.org/details/cdroms'],
  },
  {
    title: 'Tax Preparation Software (1988)',
    links: ['https://archive.org/details/taxpreparati'],
  },
  {
    title: 'Shareware',
    links: ['https://archive.org/details/shareware'],
  },
  {
    title: 'The Commodore 64',
    links: ['https://archive.org/details/CC517_commodore_64'],
  },
  {
    title: 'Multitasking Operating Systems',
    links: ['https://archive.org/details/CC518_multitasking'],
  },
  {
    title: 'Business Graphics: Part 1 – Mac',
    links: ['https://archive.org/details/CC519_business_graphics_1'],
  },
  {
    title: 'Business Graphics: Part 2 – PC',
    links: ['https://archive.org/details/CC520_business_graphics_2'],
  },
  {
    title: 'Input Devices',
    links: ['https://archive.org/details/CC521_input_devices'],
  },
  {
    title: 'Computers and Politics (1988)',
    links: [],
  },
  {
    title: 'Laptop Peripherals',
    links: ['https://archive.org/details/CC523_laptop_peripherals'],
  },
  {
    title: 'Add-On Boards & Cards',
    links: ['https://archive.org/details/CC524_add-on_boards'],
  },
  {
    title: 'Investment Software',
    links: ['https://archive.org/details/CC525_investment_software'],
  },
  {
    title: 'Personal CAD Software',
    links: ['https://archive.org/details/CC526_personal_cad'],
  },
  {
    title: 'MacWorld Boston (1988)',
    links: ['https://archive.org/details/CC601_macworld'],
  },
  {
    title: 'Computer Bowl I: Part 1',
    links: ['https://archive.org/details/episode_602'],
  },
  {
    title: 'Computer Bowl I: Part 2',
    links: ['https://archive.org/details/episode_603'],
  },
  {
    title: 'Bus Wars',
    links: ['https://archive.org/details/buswars'],
  },
  {
    title: 'The Apple II',
    links: ['https://archive.org/details/CC605_apple_ii_forever'],
  },
  {
    title: 'Spreadsheet Wars',
    links: ['https://archive.org/details/CC606_spreadsheet_wars'],
  },
  {
    title: 'Consumer Buyers Guide',
    links: ['https://archive.org/details/buyersguide_2'],
  },
  {
    title: 'Comdex Special (1988)',
    links: ['https://archive.org/details/comdex_3'],
  },
  {
    title: 'Hard Disk Management',
    links: ['https://archive.org/details/Uharddiskman'],
  },
  {
    title: 'Computer Viruses',
    links: ['https://archive.org/details/viruses_2'],
  },
  {
    title: 'Personal Information Management Software (PIMS)',
    links: ['https://archive.org/details/pims'],
  },
  {
    title: 'MacWorld San Francisco (1989)',
    links: ['https://archive.org/details/macworldsf'],
  },
  {
    title: 'Amiga 2500',
    links: ['https://archive.org/details/amiga_3'],
  },
  {
    title: 'Fax Boards',
    links: ['https://archive.org/details/faxboards'],
  },
  {
    title: 'Writing Style Software',
    links: ['https://archive.org/details/writingsoftw'],
  },
  {
    title: 'Foreign Language Software (1989)',
    links: ['https://archive.org/details/foreignlangu'],
  },
  {
    title: 'High Tech India: Part 1',
    links: ['https://archive.org/details/india_2'],
  },
  {
    title: 'UNIX (1989)',
    links: ['https://archive.org/details/unix_2'],
  },
  {
    title: 'Atari ST',
    links: ['https://archive.org/details/atarist'],
  },
  {
    title: 'High Tech India: Part 2',
    links: ['https://archive.org/details/indiansoftwa'],
  },
  {
    title: 'Computing in Color',
    links: [],
  },
  {
    title: 'New Generation Laptops',
    links: ['https://archive.org/details/laptops_2'],
  },
  {
    title: 'Computers in Space',
    links: [
      'https://archive.org/details/space_2',
      'https://archive.org/details/space_3',
    ],
  },
  {
    title: 'Personal Finance Software (1989)',
    links: [],
  },
  {
    title: 'Creativity Software',
    links: [],
  },
  {
    title: 'Artificial Intelligence (1989)',
    links: [],
  },
  {
    title: 'New Portable Computers',
    links: ['https://archive.org/details/CC704_new_laptops'],
  },
  {
    title: 'Software for Kids (1989)',
    links: [],
  },
  {
    title: 'Megahertz Mania',
    links: ['https://archive.org/details/CC706_megahertz_mania'],
  },
  {
    title: 'Desktop Presentation Graphics: Part 1',
    links: [
      'https://archive.org/details/CC707_desktop_presentation_graphics_1',
    ],
  },
  {
    title: 'Desktop Presentation Graphics: Part 2',
    links: [
      'https://archive.org/details/CC707_desktop_presentation_graphics_2',
    ],
  },
  {
    title: 'Holiday Buyers Guide',
    links: ['https://archive.org/details/CC709_buyers_guide'],
  },
  {
    title: 'Software Piracy',
    links: [],
  },
  {
    title: 'DOS to Mac and Back',
    links: ['https://archive.org/details/CC711_dos_mac'],
  },
  {
    title: 'Computers and Fitness',
    links: ['https://archive.org/details/CC712_fitness'],
  },
  {
    title: 'Low Cost LANs',
    links: ['https://archive.org/details/CC713_lans'],
  },
  {
    title: 'Computers and the Law',
    links: [],
  },
  {
    title: 'Optical Storage',
    links: ['https://archive.org/details/CC715_optical_storage'],
  },
  {
    title: 'Low Cost Laser Printers',
    links: ['https://archive.org/details/CC716_low_cost_laser_printers'],
  },
  {
    title: 'Computer Ergonomics (1990)',
    links: [],
  },
  {
    title: 'Programming Languages (1990)',
    links: ['https://archive.org/details/programming_2'],
  },
  {
    title: 'HyperCard Update',
    links: ['https://archive.org/details/hypercard_2'],
  },
  {
    title: 'Desktop Video',
    links: ['https://archive.org/details/desktopvideo'],
  },
  {
    title: 'Flight Simulators (1990)',
    links: ['https://archive.org/details/flightsimula'],
  },
  {
    title: 'Computers on Campus',
    links: ['https://archive.org/details/oncampus'],
  },
  {
    title: 'High Tech France: Part 1',
    links: ['https://archive.org/details/frenchtech1'],
  },
  {
    title: 'High Tech France: Part 2',
    links: ['https://archive.org/details/episode_724'],
  },
  {
    title: 'Computer Bowl II: Part 1',
    links: ['https://archive.org/details/compbowl1'],
  },
  {
    title: 'Computer Bowl II: Part 2',
    links: ['https://archive.org/details/compbowl2'],
  },
  {
    title: 'The Global Software Market',
    links: ['https://archive.org/details/globalsw'],
  },
  {
    title: 'Windows 3.0',
    links: ['https://archive.org/details/windows30'],
  },
  {
    title: 'Hypertext',
    links: ['https://archive.org/details/hypertext'],
  },
  {
    title: 'Rebirth of the Home Computer',
    links: ['https://archive.org/details/homepcs'],
  },
  {
    title: 'Palmtop Computers',
    links: ['https://archive.org/details/palmtops'],
  },
  {
    title: 'Input Devices',
    links: ['https://archive.org/details/inputdevices'],
  },
  {
    title: 'The Amiga 3000',
    links: ['https://archive.org/details/amiga3000'],
  },
  {
    title: 'Consumer Buying Guide (1990)',
    links: ['https://archive.org/details/buyersguide'],
  },
  {
    title: 'Memory Management',
    links: ['https://archive.org/details/memory_2'],
  },
  {
    title: 'Video Game Consoles',
    links: ['https://archive.org/details/videogames_2'],
  },
  {
    title: 'Viruses',
    links: ['https://archive.org/details/viruses_3'],
  },
  {
    title: 'Speech Technology',
    links: ['https://archive.org/details/speech_2'],
  },
  {
    title: 'Macros',
    links: ['https://archive.org/details/macros_2'],
  },
  {
    title: 'CD-ROM Software (1991)',
    links: ['https://archive.org/details/cdroms_2'],
  },
  {
    title: 'Sleeper Software',
    links: ['https://archive.org/details/sleepersw'],
  },
  {
    title: 'Flight Simulators (1991)',
    links: ['https://archive.org/details/episode_823'],
  },
  {
    title: 'Consumer Electronics Show (CES) (1991)',
    links: ['https://archive.org/details/ces_2'],
  },
  {
    title: 'Computers and Medicine',
    links: ['https://archive.org/details/medicalcare'],
  },
  {
    title: 'Scanners',
    links: ['https://archive.org/details/scanners'],
  },
  {
    title: 'Computers and Sports (1991)',
    links: ['https://archive.org/details/episode_846'],
  },
  {
    title: 'Software in the Schools',
    links: ['https://archive.org/details/schoolsw'],
  },
  {
    title: 'Fonts City',
    links: ['https://archive.org/details/fonts_2'],
  },
  {
    title: 'Network Security',
    links: ['https://archive.org/details/networksecur'],
  },
  {
    title: 'Computer Bowl III: Part 1',
    links: ['https://archive.org/details/computerbowl'],
  },
  {
    title: 'Computer Bowl III: Part 2',
    links: ['https://archive.org/details/episode_851'],
  },
  {
    title: 'Neural Networks',
    links: ['https://archive.org/details/neuralnetwor'],
  },
  {
    title: 'Macintosh System 7.0',
    links: ['https://archive.org/details/episode_909'],
  },
  {
    title: 'Windows Applications',
    links: ['https://archive.org/details/windowsapps'],
  },
  {
    title: 'File Compression',
    links: ['https://archive.org/details/filecompress'],
  },
  {
    title: 'Computer Displays',
    links: ['https://archive.org/details/displays_2'],
  },
  {
    title: 'Foreign Language Software (1991)',
    links: ['https://archive.org/details/episode_920'],
  },
  {
    title: 'Tandy/Radio Shack Computers',
    links: ['https://archive.org/details/episode_921'],
  },
  {
    title: 'Laptops and Handhelds',
    links: ['https://archive.org/details/episode_929'],
  },
  {
    title: 'Computer Games (1991)',
    links: ['https://archive.org/details/episode_932'],
  },
  {
    title: 'PC Networks',
    links: [],
  },
  {
    title: 'Consumer Buying Guide (1991)',
    links: ['https://archive.org/details/episode_937'],
  },
  {
    title: 'Groupware',
    links: ['https://archive.org/details/groupware_2'],
  },
  {
    title: 'Integrated Software Suites',
    links: ['https://archive.org/details/integratedso'],
  },
  {
    title: 'Build Your Own PC',
    links: ['https://archive.org/details/episode_940'],
  },
  {
    title: 'Computer Video',
    links: ['https://archive.org/details/episode_941'],
  },
  {
    title: 'Tax Preparation Software (1992)',
    links: ['https://archive.org/details/episode_927'],
  },
  {
    title: 'MIDI Music',
    links: ['https://archive.org/details/midimusic'],
  },
  {
    title: 'Computers and the Disabled (1992)',
    links: ['https://archive.org/details/disabled_2'],
  },
  {
    title: 'Intel 486',
    links: ['https://archive.org/details/intel486'],
  },
  {
    title: 'CD-ROM Software (1992)',
    links: ['https://archive.org/details/cdromsw'],
  },
  {
    title: 'Space and Astronomy Software',
    links: ['https://archive.org/details/episode_946'],
  },
  {
    title: 'Easy to Use Database Software',
    links: ['https://archive.org/details/episode_947'],
  },
  {
    title: 'Virtual Reality',
    links: ['https://archive.org/details/virtualreali'],
  },
  {
    title: 'Computers and Kids (1992)',
    links: ['https://archive.org/details/episode_949'],
  },
  {
    title: 'Computer Bowl IV: Part 1',
    links: ['https://archive.org/details/episode_950'],
  },
  {
    title: 'Computer Bowl IV: Part 2',
    links: ['https://archive.org/details/episode_951'],
  },
  {
    title: 'Diagnostic Software',
    links: ['https://archive.org/details/diagnosticso'],
  },
  {
    title: 'Comdex Spring',
    links: ['https://archive.org/details/episode_1001'],
  },
  {
    title: 'Computer Connectivity',
    links: ['https://archive.org/details/connectivity_2'],
  },
  {
    title: 'Computers and Politics (1992)',
    links: ['https://archive.org/details/Computer_3'],
  },
  {
    title: 'Computer Speech',
    links: [],
  },
  {
    title: 'Windows Enhancements: Software',
    links: ['https://archive.org/details/WindowsE'],
  },
  {
    title: 'Windows Enhancements: Hardware',
    links: ['https://archive.org/details/WindowsE_2'],
  },
  {
    title: 'ETRE Vienna',
    links: ['https://archive.org/details/GlobalSo'],
  },
  {
    title: 'Secrets of Word Perfect',
    links: ['https://archive.org/details/Secretso'],
  },
  {
    title: 'Consumer Buying Guide (1992)',
    links: ['https://archive.org/details/Computer_6'],
  },
  {
    title: 'Comdex Fall',
    links: ['https://archive.org/details/episode_1021'],
  },
  {
    title: 'Notebook Computers',
    links: [
      'https://archive.org/details/notebooks_2',
      'https://archive.org/details/Notebook_2',
    ],
  },
  {
    title: 'New Age Spreadsheets\nNew Generation Spreadsheets',
    links: ['https://archive.org/details/NewAgeSp'],
  },
  {
    title: 'Computer Art',
    links: ['https://archive.org/details/Computer_7'],
  },
  {
    title: "Beginner's Guide to Computing",
    links: ['https://archive.org/details/episode_1040'],
  },
  {
    title: 'Electronic Publishing',
    links: ['https://archive.org/details/Electron'],
  },
  {
    title: 'Computer Ergonomics (1993)',
    links: [
      'https://archive.org/details/Computer_4',
      'https://archive.org/details/Computer_8',
    ],
  },
  {
    title: 'CD-ROM Software (1993)',
    links: ['https://archive.org/details/CDROM10.3'],
  },
  {
    title: 'Consumer Electronics Show (CES) (1993)',
    links: ['https://archive.org/details/episode_1023'],
  },
  {
    title: 'OS/2',
    links: ['https://archive.org/details/os2_2'],
  },
  {
    title: 'Digital Photography',
    links: ['https://archive.org/details/Electron10.2'],
  },
  {
    title: 'Creative Writing Software',
    links: ['https://archive.org/details/episode_1046'],
  },
  {
    title: 'The New Macs',
    links: ['https://archive.org/details/NewMacs'],
  },
  {
    title: 'Organizer Software',
    links: ['https://archive.org/details/episode_1048'],
  },
  {
    title: 'SPA Codie Awards (1993)',
    links: ['https://archive.org/details/episode_1031'],
  },
  {
    title: 'Visual Programming Languages',
    links: ['https://archive.org/details/VisualPr'],
  },
  {
    title: 'Self Improvement Software',
    links: ['https://archive.org/details/episode_1050'],
  },
  {
    title: 'Computer Bowl V: Part 1',
    links: ['https://archive.org/details/episode_1051'],
  },
  {
    title: 'Computer Bowl V: Part 2',
    links: ['https://archive.org/details/episode_1052'],
  },
  {
    title: 'High Tech Israel',
    links: ['https://archive.org/details/episode_1109'],
  },
  {
    title: 'Baseball Software',
    links: ['https://archive.org/details/Baseball'],
  },
  {
    title: 'PDAs',
    links: ['https://archive.org/details/episode_1113'],
  },
  {
    title: 'Pentium PCs',
    links: ['https://archive.org/details/episode_1114'],
  },
  {
    title: 'DOS 6.2',
    links: [
      'https://archive.org/details/episode_1149',
      'https://archive.org/details/DOS62',
    ],
  },
  {
    title: 'ETRE 1993 Barcelona',
    links: ['https://archive.org/details/episode_1106'],
  },
  {
    title: 'The Internet',
    links: ['https://archive.org/details/episode_1134'],
  },
  {
    title: 'Windows NT',
    links: ['https://archive.org/details/WindowsN'],
  },
  {
    title: 'Consumer Buying Guide (1993)',
    links: [
      'https://archive.org/details/Consumer_3',
      'https://archive.org/details/episode_1136',
    ],
  },
  {
    title: 'Buying a New Computer',
    links: ['https://archive.org/details/BuyingaN'],
  },
  {
    title: 'Comdex 1993',
    links: ['https://archive.org/details/episode_1130'],
  },
  {
    title: 'Digital Journalism',
    links: ['https://archive.org/details/DigitalJ'],
  },
  {
    title: 'Color Printing',
    links: ['https://archive.org/details/ColorPri'],
  },
  {
    title: 'Tax Software',
    links: ['https://archive.org/details/TaxSoftw'],
  },
  {
    title: 'Screen Savers and Wallpapers',
    links: ['https://archive.org/details/ScreenSa'],
  },
  {
    title: 'MacWorld San Francisco 1994',
    links: ['https://archive.org/details/episode_1119'],
  },
  {
    title: 'Small Business Software',
    links: ['https://archive.org/details/SmallBus'],
  },
  {
    title: 'Software for Kids (1994)',
    links: ['https://archive.org/details/Software_3'],
  },
  {
    title: 'Slots – Local Bus Video',
    links: ['https://archive.org/details/SlotsLoc'],
  },
  {
    title: 'Consumer Electronics Show (CES) (1994)',
    links: [],
  },
  {
    title: 'Green PCs',
    links: ['https://archive.org/details/episode_1124'],
  },
  {
    title: 'Email/Groupware',
    links: ['https://archive.org/details/1125'],
  },
  {
    title: 'Multimedia',
    links: ['https://archive.org/details/Multimed_2'],
  },
  {
    title: 'CD-ROM Software (1994)',
    links: ['https://archive.org/details/CDRom'],
  },
  {
    title: 'Foreign Language Software (1994)',
    links: ['https://archive.org/details/ForeignL'],
  },
  {
    title: 'Computer Bowl VI: Part 1',
    links: ['https://archive.org/details/Computer_9'],
  },
  {
    title: 'Computer Bowl VI: Part 2',
    links: ['https://archive.org/details/CC-ComputerBowl1994_2-Episode1152'],
  },
  {
    title: 'PC Expo (1994)',
    links: [
      'https://archive.org/details/PCExpo',
      'https://archive.org/details/CC1201_pc_expo',
    ],
  },
  {
    title: 'MacWorld Boston (1994)',
    links: [
      'https://archive.org/details/1202',
      'https://archive.org/details/MacWorld_2',
    ],
  },
  {
    title: 'ETRE Conference Barcelona (1994)',
    links: [],
  },
  {
    title: 'PowerPC and PowerMac',
    links: ['https://archive.org/details/PowerPC10.1'],
  },
  {
    title: 'Computer Art',
    links: ['https://archive.org/details/CC1205_computer_art'],
  },
  {
    title: 'Plug and Play',
    links: ['https://archive.org/details/PlugPlay'],
  },
  {
    title: 'Windows 4.0 a.k.a. Windows 95',
    links: ['https://archive.org/details/Windows4'],
  },
  {
    title: 'Virtual Meetings',
    links: ['https://archive.org/details/VirtualM'],
  },
  {
    title: "Consumer's Buying Guide (1994)",
    links: ['https://archive.org/details/CC1210_consumer_buying_guide'],
  },
  {
    title: 'Comdex Special (1994)',
    links: ['https://archive.org/details/ComdexSp'],
  },
  {
    title: 'Talking Computers',
    links: ['https://archive.org/details/TalkingC'],
  },
  {
    title: 'Interactive Music',
    links: ['https://archive.org/details/CC1238_interactive_music'],
  },
  {
    title: 'Digital Photo Finishing',
    links: ['https://archive.org/details/Photofin'],
  },
  {
    title: 'Computer Games (1995)',
    links: ['https://archive.org/details/CC1218_greatest_games'],
  },
  {
    title: 'Computers and Sports (1995)',
    links: [
      'https://archive.org/details/PCSports',
      'https://archive.org/details/CC1219_pc_sports',
    ],
  },
  {
    title: 'Consumer Electronics Show (CES) (1995)',
    links: ['https://archive.org/details/CC-CES1994-Episode1123'],
  },
  {
    title: 'OS/2 Warp',
    links: ['https://archive.org/details/OS2Warp'],
  },
  {
    title: 'Investment Software',
    links: [
      'https://archive.org/details/CC1224_investment_software',
      'https://archive.org/details/Investme',
    ],
  },
  {
    title: 'Learning on a Computer',
    links: ['https://archive.org/details/CC1226_learning_on_a_computer'],
  },
  {
    title: 'Computer Memory',
    links: [
      'https://archive.org/details/LosingMe',
      'https://archive.org/details/CC1227_losing_memory',
    ],
  },
  {
    title: 'SPA Codie Awards (1995)',
    links: ['https://archive.org/details/SPAAward'],
  },
  {
    title: 'PC Video',
    links: ['https://archive.org/details/PCVideo'],
  },
  {
    title: 'Mobile Computing',
    links: ['https://archive.org/details/MobileCo'],
  },
  {
    title: 'The Internet',
    links: ['https://archive.org/details/CC1232_internet'],
  },
  {
    title: 'Computer Bowl VII: Part 1',
    links: ['https://archive.org/details/CC1236_computer_bowl'],
  },
  {
    title: 'Gary Kildall Special',
    links: ['https://archive.org/details/GaryKild'],
  },
  {
    title: 'Windows 95',
    links: ['https://archive.org/details/CC1301_windows_95'],
  },
  {
    title: 'Mac Clones and New OS',
    links: [
      'https://archive.org/details/MacClone95',
      'https://archive.org/details/MacClone',
    ],
  },
  {
    title: 'Smart TV',
    links: [
      'https://archive.org/details/SmartTV95',
      'https://archive.org/details/SmartTV',
    ],
  },
  {
    title: 'Computers and Healthcare',
    links: ['https://archive.org/details/CC1335_computers_and_healthcare'],
  },
  {
    title: 'Silicon Glen',
    links: [],
  },
  {
    title: 'Computing Seniors',
    links: ['https://archive.org/details/CC1327_computing_seniors'],
  },
  {
    title: 'Buy or Upgrade?',
    links: ['https://archive.org/details/BuyOrUpg'],
  },
  {
    title: 'Computer Games (1995)',
    links: ['https://archive.org/details/CC1308_greatest_games'],
  },
  {
    title: 'ETRE Conference Madrid (1995): Part 1',
    links: ['https://archive.org/details/CC1310_etre'],
  },
  {
    title: "Consumer's Buying Guide (1995)",
    links: [
      'https://archive.org/details/CC1311_holiday_buying_guide',
      'https://archive.org/details/HolidayB',
    ],
  },
  {
    title: 'Comdex Special (1995)',
    links: ['https://archive.org/details/FallComd'],
  },
  {
    title: 'PC Troubleshooting',
    links: ['https://archive.org/details/PCTroubl'],
  },
  {
    title: 'Information Overload',
    links: ['https://archive.org/details/Informat96'],
  },
  {
    title: 'Computers and Kids (1996)',
    links: ['https://archive.org/details/Komputer'],
  },
  {
    title: 'ETRE Conference Madrid (1995): Part 2',
    links: ['https://archive.org/details/EtrePt2'],
  },
  {
    title: 'SOHO Software',
    links: [
      'https://archive.org/details/SohoSoft',
      'https://archive.org/details/CC1319_soho_software',
    ],
  },
  {
    title: 'Consumer Electronics Show (CES) (1996)',
    links: [
      'https://archive.org/details/WinterCE',
      'https://archive.org/details/CC1320_winter_ces_1996',
    ],
  },
  {
    title: 'Online Tips',
    links: [
      'https://archive.org/details/OnlineTi96',
      'https://youtube.com/watch?v=inv4wwQZPb8',
      'https://archive.org/details/OnlineTi',
    ],
  },
  {
    title: 'Financial Software',
    links: [
      'https://archive.org/details/cc1345_finance_banking_software',
      'https://archive.org/details/BankingF',
    ],
  },
  {
    title: 'Silicon Glen: Part 2',
    links: ['https://archive.org/details/CC1324_research_in_silicon_glen'],
  },
  {
    title: 'Software Thinking Tools',
    links: ['https://archive.org/details/CC1325_software_thinking_tools'],
  },
  {
    title: 'Cars and Computers',
    links: ['https://archive.org/details/CarsComp'],
  },
  {
    title: 'SPA Codie Awards (1996)',
    links: ['https://archive.org/details/CC1349_codies_special'],
  },
  {
    title: 'The New PCs',
    links: ['https://archive.org/details/CC1331_new_pcs'],
  },
  {
    title: 'E3 Special',
    links: ['https://archive.org/details/E3Specia'],
  },
  {
    title: 'MacWorld Boston (1996)',
    links: ['https://archive.org/details/MacWorld'],
  },
  {
    title: 'Cyber Cafes',
    links: ['https://archive.org/details/CyberCaf'],
  },
  {
    title: 'Internet Telephony',
    links: ['https://archive.org/details/Internet_2'],
  },
  {
    title: 'Search Engines',
    links: ['https://archive.org/details/ComputerChronicles-SearchEngines_861'],
  },
  {
    title: 'IT Forum, Paris',
    links: [],
  },
  {
    title: 'Cyber Politics',
    links: ['https://archive.org/details/CyberPol'],
  },
  {
    title: 'Online Shopping',
    links: [
      'https://archive.org/details/OnLineSh',
      'https://archive.org/details/CC1407OnlineShopping',
    ],
  },
  {
    title: 'ETRE Conference Berlin (1996)',
    links: ['https://archive.org/details/ETRE1997'],
  },
  {
    title: "Consumer's Buying Guide (1996)",
    links: ['https://archive.org/details/CC1411_consumer_buying_guide'],
  },
  {
    title: 'Digital Photography',
    links: ['https://archive.org/details/CC1412_digital_photography'],
  },
  {
    title: 'Computer Games (1996)',
    links: ['https://archive.org/details/CC1415_greatest_games'],
  },
  {
    title: 'Internet TV',
    links: ['https://archive.org/details/CC1416_internet_tv'],
  },
  {
    title: 'Comdex Special (1996)',
    links: [
      'https://archive.org/details/CC1417_best_of_comdex',
      'https://archive.org/details/BestofCo',
    ],
  },
  {
    title: 'Wireless Computing',
    links: ['https://archive.org/details/Wireless_2'],
  },
  {
    title: 'Sports Simulation Software',
    links: ['https://archive.org/details/SportsSi'],
  },
  {
    title: 'Cyber Dating',
    links: ['https://archive.org/details/CyberDat'],
  },
  {
    title: 'Consumer Electronics Show (CES) (1997)',
    links: ['https://archive.org/details/CC1421_ces'],
  },
  {
    title: 'E-Mail',
    links: ['https://archive.org/details/CC1423_email'],
  },
  {
    title: 'Computers and the Disabled (1997)',
    links: ['https://archive.org/details/CC1424_computers_and_the_disabled'],
  },
  {
    title: 'Cyber Music',
    links: ['https://archive.org/details/CyberMus'],
  },
  {
    title: 'SPA Codie Awards (1997)',
    links: ['https://archive.org/details/SpaCodie'],
  },
  {
    title: 'Cyber Art',
    links: ['https://archive.org/details/CC1430_computer_art'],
  },
  {
    title: 'Cyber Security',
    links: ['https://archive.org/details/CyberSec'],
  },
  {
    title: 'Website Creation',
    links: ['https://archive.org/details/WebSiteC'],
  },
  {
    title: 'Computer Bowl IX: Part 1',
    links: [],
  },
  {
    title: 'Computer Bowl IX: Part 2',
    links: [],
  },
  {
    title: 'Wireless Computing',
    links: ['https://archive.org/details/Wireless_2'],
  },
  {
    title: 'Internet Showcase Special (1997)',
    links: ['https://archive.org/details/Internet_4'],
  },
  {
    title: 'Push Technology',
    links: ['https://archive.org/details/Pushtech98'],
  },
  {
    title: 'Internet Advertising',
    links: [],
  },
  {
    title: 'Java Tools',
    links: ['https://archive.org/details/JAVATool'],
  },
  {
    title: 'Virtual Universities',
    links: ['https://archive.org/details/VirtualU98'],
  },
  {
    title: 'Cyber Fiction',
    links: ['https://archive.org/details/Cyberfic98'],
  },
  {
    title: 'Electronic Commerce',
    links: ['https://archive.org/details/CC1535ECOMMERCE'],
  },
  {
    title: 'Battle of the Browsers',
    links: [
      'https://archive.org/details/CC1536BROWSERS',
      'https://archive.org/details/Battleof98',
    ],
  },
  {
    title: "Consumer's Buying Guide",
    links: [],
  },
  {
    title: 'Comdex Special (1997)',
    links: ['https://archive.org/details/BestofCo98'],
  },
  {
    title: 'Web Plug-ins',
    links: ['https://archive.org/details/WebPlugI98'],
  },
  {
    title: 'Cyber Privacy',
    links: ['https://archive.org/details/CyberPri98'],
  },
  {
    title: 'Putting Your Business Online',
    links: ['https://archive.org/details/CC1541BUSONLINE'],
  },
  {
    title: 'Online Games',
    links: [
      'https://archive.org/details/BestComp98',
      'https://archive.org/details/CC1542ONLINEGAMES',
    ],
  },
  {
    title: 'Home Design Software',
    links: ['https://archive.org/details/Homedesi98'],
  },
  {
    title: 'Storage Solutions',
    links: ['https://archive.org/details/Storages98'],
  },
  {
    title: 'Internet Showcase, San Diego',
    links: [],
  },
  {
    title: 'My Web Site',
    links: ['https://archive.org/details/MyWebsit98'],
  },
  {
    title: 'Desktop Video',
    links: ['https://archive.org/details/Desktopv98'],
  },
  {
    title: 'Online Travel Planning',
    links: ['https://archive.org/details/Travelpl98'],
  },
  {
    title: 'SPA Codie Awards (1998)',
    links: ['https://archive.org/details/1998Codi98'],
  },
  {
    title: 'Doc in a Box – Healthcare Software',
    links: ['https://archive.org/details/Docinabo98'],
  },
  {
    title: 'Computer Bowl X: Part 1',
    links: ['https://archive.org/details/Computer98'],
  },
  {
    title: 'Computer Bowl X: Part 2',
    links: ['https://archive.org/details/AnnualCo98'],
  },
  {
    title: 'Best of Comdex',
    links: ['https://archive.org/details/BestofCo98'],
  },
  {
    title: 'Digital Living Room',
    links: ['https://archive.org/details/DigitalL98'],
  },
  {
    title: 'Windows 98',
    links: ['https://archive.org/details/Windows9_2'],
  },
  {
    title: 'Mac Update',
    links: ['https://archive.org/details/Macupdat98'],
  },
  {
    title: 'Software Secrets',
    links: ['https://archive.org/details/Software99'],
  },
  {
    title: 'Internet Video Telephony',
    links: [
      'https://archive.org/details/Internet99',
      'https://archive.org/details/CC1635TELEPHONY',
    ],
  },
  {
    title: 'ETRE Conference Lisbon (1998): Part 1',
    links: ['https://archive.org/details/ETRE1999_2'],
  },
  {
    title: 'ETRE Conference Lisbon (1998): Part 2',
    links: ['https://archive.org/details/ETRE1999'],
  },
  {
    title: 'Web Radio',
    links: ['https://archive.org/details/WebRadio99'],
  },
  {
    title: "Consumer's Buying Guide (1998)",
    links: [],
  },
  {
    title: 'PDAs and Handhelds',
    links: ['https://archive.org/details/CC1638PDAS'],
  },
  {
    title: 'Bill Gates Profile',
    links: ['https://archive.org/details/BillGate99'],
  },
  {
    title: 'Comdex Special (1998)',
    links: [
      'https://archive.org/details/CC1634COMDEX',
      'https://archive.org/details/BestofCo99',
    ],
  },
  {
    title: 'E-Commerce',
    links: ['https://archive.org/details/CC1639ECOMMERCE'],
  },
  {
    title: '3D Graphics',
    links: ['https://archive.org/details/3DGraphi'],
  },
  {
    title: 'Digital Photography',
    links: ['https://archive.org/details/DigtalPh'],
  },
  {
    title: 'Computing for Parents',
    links: [
      'https://archive.org/details/Parentin99',
      'https://archive.org/details/CC1644PARENTING',
    ],
  },
  {
    title: 'Tax Preparation Software',
    links: ['https://archive.org/details/Taxprepa99'],
  },
  {
    title: 'Fixing Your PC',
    links: ['https://archive.org/details/FixingYo99'],
  },
  {
    title: 'Speech Technology',
    links: ['https://archive.org/details/SpeechTe99'],
  },
  {
    title: 'Internet Showcase (1999)',
    links: ['https://archive.org/details/CC1623SHOWCASE'],
  },
  {
    title: 'Y2K',
    links: [
      'https://archive.org/details/Year2000',
      'https://archive.org/details/Y2KYear21999',
    ],
  },
  {
    title: 'SPA Codie Awards (1999)',
    links: [
      'https://archive.org/details/CC1649CODIES',
      'https://archive.org/details/1999Codi99',
    ],
  },
  {
    title: 'Programming Languages',
    links: ['https://archive.org/details/Programm99'],
  },
  {
    title: 'Creativity Software',
    links: ['https://archive.org/details/Creating_2'],
  },
  {
    title: 'E-Mail Update',
    links: ['https://archive.org/details/1652'],
  },
  {
    title: 'Computer Games (1999)',
    links: ['https://archive.org/details/Gaming1999'],
  },
  {
    title: 'DVDs',
    links: ['https://archive.org/details/DVD1011999'],
  },
  {
    title: 'TV Meets PC',
    links: ['https://archive.org/details/TVMeetsP2001'],
  },
  {
    title: 'Computer Crime',
    links: ['https://archive.org/details/Computer1999'],
  },
  {
    title: 'Digital Home Movies',
    links: ['https://archive.org/details/DigitalH1999'],
  },
  {
    title: 'Robots',
    links: ['https://archive.org/details/Robots1999'],
  },
  {
    title: "Consumer's Buying Guide (1999)",
    links: ['https://archive.org/details/Consumer1999'],
  },
  {
    title: 'ETRE Conference Monte Carlo (1999): Part 1',
    links: ['https://archive.org/details/ETREEuro1999'],
  },
  {
    title: 'ETRE Conference Monte Carlo (1999): Part 2',
    links: ['https://archive.org/details/ETREEuro1999_2'],
  },
  {
    title: 'Comdex Special (1999)',
    links: ['https://archive.org/details/BestofCO1999'],
  },
  {
    title: 'Copyright Issues Online',
    links: ['https://archive.org/details/Copyrigh2000'],
  },
  {
    title: 'Home Networks',
    links: ['https://archive.org/details/HomeNetw2001'],
  },
  {
    title: 'ETRE Conference Monaco (1999): Part 3',
    links: ['https://archive.org/details/ETREEuro2000'],
  },
  {
    title: 'Faster Net Access',
    links: ['https://archive.org/details/FasterNe2000'],
  },
  {
    title: 'Music on the PC',
    links: ['https://archive.org/details/Musicont2000'],
  },
  {
    title: 'Computers without Keyboards',
    links: ['https://archive.org/details/Computer2000'],
  },
  {
    title: 'Internet Showcase Special (2000): Part 1',
    links: ['https://archive.org/details/Showcase2000'],
  },
  {
    title: 'Internet Showcase Special (2000): Part 2',
    links: ['https://archive.org/details/Showcase2000_2'],
  },
  {
    title: 'Cooking with Your PC',
    links: ['https://archive.org/details/Cookingw2000'],
  },
  {
    title: 'Online Investing',
    links: ['https://archive.org/details/OnlineIn2000'],
  },
  {
    title: 'Computers and Politics (2000)',
    links: ['https://archive.org/details/Computer2000_2'],
  },
  {
    title: 'Users Group Dayton Special',
    links: ['https://archive.org/details/UsersGro2000'],
  },
  {
    title: 'Digital Living Room: Part 1',
    links: ['https://archive.org/details/DigitalL2000'],
  },
  {
    title: 'Digital Living Room: Part 2',
    links: ['https://archive.org/details/DigitalL2000_2'],
  },
  {
    title: 'ETRE Conference Prague (2000): Part 1',
    links: ['https://archive.org/details/ETREEuro2001'],
  },
  {
    title: 'ETRE Conference Prague (2000): Part 2',
    links: ['https://archive.org/details/ETREEuro2001_2'],
  },
  {
    title: "Consumer's Buying Guide (2000)",
    links: ['https://archive.org/details/CC1812BUYGUIDE'],
  },
  {
    title: 'MP3 Secrets',
    links: ['https://archive.org/details/MP3Secre2001'],
  },
  {
    title: 'ETRE Conference Prague (2000): Part 3',
    links: ['https://archive.org/details/CC1815ETRE2000THREE'],
  },
  {
    title: 'Online Gaming',
    links: [
      'https://archive.org/details/OnlineGa01.0',
      'https://archive.org/details/CC1816GAMING',
    ],
  },
  {
    title: 'Privacy Online',
    links: ['https://archive.org/details/PrivacyO2001'],
  },
  {
    title: 'Easy Webcams',
    links: ['https://archive.org/details/EasyWebC2001'],
  },
  {
    title: 'High Tech Hawaii: Part 1',
    links: ['https://archive.org/details/CC1820HAWAIIONE'],
  },
  {
    title: 'High Tech Hawaii: Part 2',
    links: ['https://archive.org/details/HiTechHa2002'],
  },
  {
    title: 'High Tech Hawaii: Part 3',
    links: ['https://archive.org/details/HiTechHa2001_2'],
  },
  {
    title: 'High Tech Hawaii: Part 4',
    links: ['https://archive.org/details/HiTechHa2001_3'],
  },
  {
    title: 'Creating Your Own Website (2001)',
    links: ['https://archive.org/details/Creating2001'],
  },
  {
    title: 'Consumer Electronics Show (CES) (2001)',
    links: ['https://archive.org/details/CC1846CES2001'],
  },
  {
    title: 'Wireless Technology',
    links: ['https://archive.org/details/Wireless2001'],
  },
  {
    title: 'Finding a Job Online',
    links: ['https://archive.org/details/Findinga2001'],
  },
  {
    title: 'Security and Viruses',
    links: ['https://archive.org/details/Security2001'],
  },
  {
    title: 'Online Universities',
    links: ['https://archive.org/details/OnlineUn2001'],
  },
  {
    title: 'Guide to Online Auctions',
    links: ['https://archive.org/details/GuidetoO2001'],
  },
  {
    title: 'Ultimate Gaming PC',
    links: ['https://archive.org/details/CC1851ULTIMATE'],
  },
  {
    title: 'Interactive TV',
    links: [
      'https://archive.org/details/CC1852INTERACTIVE',
      'https://archive.org/details/WebSurfi2001',
    ],
  },
  {
    title: 'Technology and the Church: Part 1',
    links: [],
  },
  {
    title: 'Technology and the Church: Part 2',
    links: ['https://archive.org/details/Technolo2001_2'],
  },
  {
    title: 'Technology and the Church: Part 3',
    links: ['https://archive.org/details/Technolo2001_3'],
  },
  {
    title: 'Computers and the Pentagon (2001): Part 1',
    links: ['https://archive.org/details/Computer2001_2'],
  },
  {
    title: 'Computers and the Pentagon (2001): Part 2',
    links: ['https://archive.org/details/Computer2001_3'],
  },
  {
    title: 'ETRE Conference Rome (2001): Part 1',
    links: ['https://archive.org/details/European2001'],
  },
  {
    title: 'ETRE Conference Rome (2001): Part 2',
    links: ['https://archive.org/details/European2001_2'],
  },
  {
    title: 'ETRE Conference Rome (2001): Part 3',
    links: ['https://archive.org/details/European2002'],
  },
  {
    title: 'ETRE Conference Rome (2001): Part 4',
    links: ['https://archive.org/details/European2002_2'],
  },
  {
    title: 'Medical Technology: Part 1',
    links: [],
  },
  {
    title: 'Medical Technology: Part 2',
    links: ['https://archive.org/details/CC1934MEDTECH'],
  },
  {
    title: 'Operating System & Browser Updates',
    links: ['https://archive.org/details/OSBrowse2002'],
  },
  {
    title: 'Computers and the 2002 Olympics: Part 1',
    links: ['https://archive.org/details/Olympics2002'],
  },
  {
    title: 'Computers and the 2002 Olympics: Part 2',
    links: ['https://archive.org/details/Olympics2002_2'],
  },
  {
    title: 'Online Travel Tips',
    links: ['https://archive.org/details/OnlineTr2002'],
  },
  {
    title: 'Preventing Spam',
    links: ['https://archive.org/details/Preventi2002'],
  },
  {
    title: 'Computers and Healthcare',
    links: ['https://archive.org/details/CC1930HEALTH'],
  },
  {
    title: 'Windows XP',
    links: [],
  },
  {
    title: 'High Tech Singapore: Part 1',
    links: ['https://archive.org/details/CC1939SING1'],
  },
  {
    title: 'High Tech Singapore: Part 2',
    links: [],
  },
  {
    title: 'High Tech Singapore: Part 3',
    links: ['https://archive.org/details/CC1940SING3'],
  },
];
