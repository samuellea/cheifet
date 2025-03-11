const data = [
  {
    gdeltTitle: 'Adventure Travel Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Adventur1999',
  },
  {
    gdeltTitle: 'Art on the Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc104_art',
  },
  {
    gdeltTitle: 'Buy It Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Buyitonl98',
  },
  {
    gdeltTitle: 'Censorship Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc111_censorship',
  },
  {
    gdeltTitle: 'Chat Rooms',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_ChatRoom00',
  },
  {
    gdeltTitle: 'Comic Books on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc102_comics',
  },
  {
    gdeltTitle: 'Conspiracy Theories (2001)',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Conspira2001',
  },
  {
    gdeltTitle: 'Conspiracy Theories (1999)',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Conspira1999',
  },
  {
    gdeltTitle: 'Consumer Protection Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Consumer99',
  },
  {
    gdeltTitle: 'Cool Home Pages',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_CoolHome98',
  },
  {
    gdeltTitle: 'Crime and Justice',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Crimeand1999',
  },
  {
    gdeltTitle: 'Cyber Chat',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_CyberCha98',
  },
  {
    gdeltTitle: 'Cyber Communities',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_CyberCom99',
  },
  {
    gdeltTitle: 'Cyber News',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_CyberNew00',
  },
  {
    gdeltTitle: 'Cyber Sports',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_CyberSpo99',
  },
  {
    gdeltTitle: 'Cyber Writing',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc112_writers',
  },
  {
    gdeltTitle: 'Disinformation on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc119_disinformation',
  },
  {
    gdeltTitle: 'E-Commerce',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_ECommerc1999',
  },
  {
    gdeltTitle: 'Entertainment on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Entertai2000',
  },
  {
    gdeltTitle: 'Equality & Diversity On Line',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc109_equality-diversity',
  },
  {
    gdeltTitle: 'Extreme Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc351_xtreme_web',
  },
  {
    gdeltTitle: 'Finding Anyone / Anything Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Findinga98',
  },
  {
    gdeltTitle: 'Finding People Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_FindingP2000',
  },
  {
    gdeltTitle: 'Fun Web Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_JustforF1999',
  },
  {
    gdeltTitle: 'Gambling and Gaming on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc428_gambling_games',
  },
  {
    gdeltTitle: 'Games on the Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc106_games',
  },
  {
    gdeltTitle: 'Grim Reaper Web Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_GrimReap98',
  },
  {
    gdeltTitle: 'Grim Reaper Web Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_GrimReap00',
  },
  {
    gdeltTitle: 'Group Therapy Net Style (1998)',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_GroupThe98',
  },
  {
    gdeltTitle: 'Group Therapy Net Style (2002)',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_GroupThe02',
  },
  {
    gdeltTitle: 'Hackers',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc101_hackers',
  },
  {
    gdeltTitle: 'Health Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc113_health',
  },
  {
    gdeltTitle: 'Hollywood on the Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Hollywoo1999',
  },
  {
    gdeltTitle: 'Home Improvement',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc231_home_improvement',
  },
  {
    gdeltTitle: 'Home Improvement',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HomeImpr2002',
  },
  {
    gdeltTitle: 'Humor on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HumorOnT98',
  },
  {
    gdeltTitle: 'Humor Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HumorOnl00',
  },
  {
    gdeltTitle: 'Incredibly Useful Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Incredib1999',
  },
  {
    gdeltTitle: 'Investing Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Investin1998',
  },
  {
    gdeltTitle: 'Jobs and Careers',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_JobsandC98',
  },
  {
    gdeltTitle: 'Lifelong Learning',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Lifelong1999',
  },
  {
    gdeltTitle: 'Lions and Tigers and Bears',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Lionsand1999',
  },
  {
    gdeltTitle: 'Love and Romance on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc103_dating_romance',
  },
  {
    gdeltTitle: 'Making Money On Line',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Moneyont98',
  },
  {
    gdeltTitle: 'Movies Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc111_movies',
  },
  {
    gdeltTitle: 'Music Web Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc110_music',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 13, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebBu01_4',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 13, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_528_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 14, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_PreIPOCo00',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 20, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_7',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 6, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_533_neww',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – April 6, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebBu01',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Dec 14, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_617_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Dec 7, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_StateOfT02',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Dec 7, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_616_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Feb 15, 2002',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_611_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Feb 22, 2002',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_612_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Jan 11, 2002',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_610_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Jan 4, 2002',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_609_netc',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 1, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_3',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 1, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_531_hotn',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 15, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebBu01_2',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 15, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebBu01_3',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 29, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Internet2001',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 8, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_4',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – June 8, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_5',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – March 9, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_530_newb',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 11, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_6',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 11, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01_2',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 26, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_PreIPOCo01',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 4, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Internet01_2',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 4, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Internet01',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 4, 2001',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_HotNewWe01',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – May 5, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebEn2000',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – November 3, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_tmp_nc_529_newb',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Oct 13, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebSi02',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Oct 20, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Newwebsi01_2',
  },
  {
    gdeltTitle: 'Net Cafe: Web StartUps – Oct 6, 2000',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Newwebsi01',
  },
  {
    gdeltTitle: 'Net Games',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NetGames00',
  },
  {
    gdeltTitle: 'New Age Web Sites',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc439_new_age_websites',
  },
  {
    gdeltTitle: 'New Web Sites – Part 1',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_NewWebSi2001',
  },
  {
    gdeltTitle: 'Nicholas Negroponte – Part One',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc613_nicholas_negroponte_pt1',
  },
  {
    gdeltTitle: 'Nicholas Negroponte – Part Two',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc615_nicholas_negroponte_pt2',
  },
  {
    gdeltTitle: 'Online Activism',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc217_online_activism',
  },
  {
    gdeltTitle: 'Online Collecting',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc440_online_collecting',
  },
  {
    gdeltTitle: 'Online Job Hunting',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_OnlineJo2000',
  },
  {
    gdeltTitle: 'Online Literature',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_OnlineLi1999',
  },
  {
    gdeltTitle: 'Online Sports',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_OnlineSp1997',
  },
  {
    gdeltTitle: 'Performing Arts on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Performi1999',
  },
  {
    gdeltTitle: 'Politics on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc103_cyberpolitics',
  },
  {
    gdeltTitle: 'Portals',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Portals98',
  },
  {
    gdeltTitle: 'Privacy in Cyberspace',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_privacyi97',
  },
  {
    gdeltTitle: 'Safe Kids Safe Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_SafeKids2002',
  },
  {
    gdeltTitle: 'Science Fiction Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc118_scifi',
  },
  {
    gdeltTitle: 'Sex Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_SexOnlin98',
  },
  {
    gdeltTitle: 'Small Business Resources On the Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_BestSOHO98',
  },
  {
    gdeltTitle: 'Space Science',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_SpaceSci98',
  },
  {
    gdeltTitle: 'Sports Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc148_online_sports',
  },
  {
    gdeltTitle: 'The 3D Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc107_vrml3d_worlds',
  },
  {
    gdeltTitle: 'The Dark Side of the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc104_dark_side_of_the_net',
  },
  {
    gdeltTitle: 'The Global Net',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_GlobalNe99',
  },
  {
    gdeltTitle: 'The Hollywood Connection',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Hollywoo98',
  },
  {
    gdeltTitle: 'The Virtual Zoo',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc147_virtual_zoo',
  },
  {
    gdeltTitle: 'The Weird Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc117_weird_web',
  },
  {
    gdeltTitle: 'Travel Sites Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc108_travel',
  },
  {
    gdeltTitle: 'TV Shows Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_TVshowso98',
  },
  {
    gdeltTitle: 'UFOs',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc102_ufos',
  },
  {
    gdeltTitle: 'Virtual Doctors',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc216_virtual_doctor',
  },
  {
    gdeltTitle: 'Voyeurism Online',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_Voyerism00',
  },
  {
    gdeltTitle: 'War On The Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_WarOnThe00',
  },
  {
    gdeltTitle: 'Web Radio',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_webradio97',
  },
  {
    gdeltTitle: 'Webby Awards 1997',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc112_webby_awards',
  },
  {
    gdeltTitle: 'Webby Awards 1999 – Part One',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_WebbyAwa99',
  },
  {
    gdeltTitle: 'Webby Awards 1999 – Part Two',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_WebbyAwa99_2',
  },
  {
    gdeltTitle: 'Webby Awards 2000 – Part One',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_2000Webb00',
  },
  {
    gdeltTitle: 'Webby Awards 2000 – Part Two',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_2000Webb00_2',
  },
  {
    gdeltTitle: 'Weird Science on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc107_weird_science',
  },
  {
    gdeltTitle: 'Women on the Web',
    url: 'https://api.gdeltproject.org/api/v2/tvv/tvv?id=IAITEM_nc105_women',
  },
];
