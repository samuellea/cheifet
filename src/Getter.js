import React, { useEffect, useRef } from 'react';

const cleanedTitles = [
  {
    title: 'Mainframes to Minis to Micros',
  },
  {
    title: 'Integrated Software',
  },
  {
    title: 'Computer Music',
  },
  {
    title: 'Computer Simulations',
  },
  {
    title: 'Operating Systems',
  },
  {
    title: 'Word Processing',
  },
  {
    title: 'Computer Security',
  },
  {
    title: 'Robotics',
  },
  {
    title: 'Speech Synthesis',
  },
  {
    title: 'Local Area Networks',
  },
  {
    title: 'Microchip Technology',
  },
  {
    title: 'Business Applications',
  },
  {
    title: 'Storage Devices',
  },
  {
    title: 'Printers',
  },
  {
    title: 'Database Software',
  },
  {
    title: 'Computer Graphics 1984',
  },
  {
    title: 'Decision Support Systems',
  },
  {
    title: 'Computer Ergonomics 1984',
  },
  {
    title: 'Programming Languages 1984',
  },
  {
    title: 'Software Utilities',
  },
  {
    title: 'Computer Games 1984',
  },
  {
    title: 'Computer Entrepreneurs',
  },
  {
    title: 'Fifth Generation Computers',
  },
  {
    title: 'Super Computers',
  },
  {
    title: 'Artificial Intelligence 1984',
  },
  {
    title: 'Computers in Education',
  },
  {
    title: 'Laser Disk Storage',
  },
  {
    title: 'Portable Computers',
  },
  {
    title: 'Computer Games 1985',
  },
  {
    title: 'IBM Compatibles',
  },
  {
    title: 'Software Piracy',
  },
  {
    title: 'Computers and the Disabled 1985',
  },
  {
    title: 'UNIX 1985',
  },
  {
    title: 'Computers and Sports 1985',
  },
  {
    title: 'Personal Finance Software 1985',
  },
  {
    title: 'The Macintosh Computer',
  },
  {
    title: 'IBM',
  },
  {
    title: 'Computers and Communications',
  },
  {
    title: 'Low End Computers',
  },
  {
    title: 'Japanese PCs',
  },
  {
    title: 'Japanese Computer Technology',
  },
  {
    title: 'Computer Graphics 1985',
  },
  {
    title: 'Slowdown in Silicon Valley Part 1',
  },
  {
    title: 'Slowdown in Silicon Valley Part 2',
  },
  {
    title: 'Women in Computing',
  },
  {
    title: 'Printers  Business Graphics',
  },
  {
    title: 'Computers and the Law',
  },
  {
    title: 'Programming  Programmers',
  },
  {
    title: 'Computers in the Media',
  },
  {
    title: 'Modems  Bulletin Boards',
  },
  {
    title: 'Computer Networks',
  },
  {
    title: 'Computers and Politics 1985',
  },
  {
    title: 'Computers and Medicine',
  },
  {
    title: 'Optical Storage Devices',
  },
  {
    title: 'Business Applications 1985',
  },
  {
    title: 'Amiga and Atari',
  },
  {
    title: 'Christmas Buyers Guide 1985',
  },
  {
    title: 'Hard Disk Storage',
  },
  {
    title: 'Artificial Intelligence 1986',
  },
  {
    title: 'Computers in Law Enforcement',
  },
  {
    title: 'Investment Software',
  },
  {
    title: 'Psychological Software',
  },
  {
    title: 'Astronomy Software',
  },
  {
    title: 'Color and Computing',
  },
  {
    title: 'Careers in Computing',
  },
  {
    title: 'Parallel Processing',
  },
  {
    title: 'Computers and the Pentagon Part 1',
  },
  {
    title: 'Computers and the Pentagon Part 2',
  },
  {
    title: 'Educational Software Part 1',
  },
  {
    title: 'Educational Software Part 2',
  },
  {
    title: 'MIDI Music',
  },
  {
    title: 'RISC',
  },
  {
    title: 'Utilities',
  },
  {
    title: 'Second Hand Computers',
  },
  {
    title: 'Desktop Publishing Part 1',
  },
  {
    title: 'Desktop Publishing Part 2',
  },
  {
    title: 'Guide to Macros',
  },
  {
    title: 'RAM Resident Software',
  },
  {
    title: 'Comdex Special 1986',
  },
  {
    title: 'Project Management Software',
  },
  {
    title: 'Christmas Buyers Guide 1986',
  },
  {
    title: 'Electronic Mail',
  },
  {
    title: '386 The Fast Lane',
  },
  {
    title: 'OnLine Services Part 1',
  },
  {
    title: 'OnLine Services Part 2',
  },
  {
    title: 'Intelligent Buildings',
  },
  {
    title: 'Modems',
  },
  {
    title: 'Speech Recognition  Synthesis',
  },
  {
    title: 'Tax Preparation Software 1987',
  },
  {
    title: 'Portable Computers',
  },
  {
    title: 'Computers and Kids 1987',
  },
  {
    title: 'Computers and the Arts',
  },
  {
    title: 'Computers and Illiteracy',
  },
  {
    title: 'Computers and Gambling',
  },
  {
    title: 'Business Applications Part 1  Word Processors',
  },
  {
    title: 'Business Applications Part 2  Spreadsheets 1',
  },
  {
    title: 'Business Applications Part 3  Spreadsheets 2',
  },
  {
    title: 'Business Applications Part 4  Database Management Software',
  },
  {
    title: 'The New Macs',
  },
  {
    title: 'IBM PS2',
  },
  {
    title: 'Super Computers 1987',
  },
  {
    title: 'PC Clones from Asia',
  },
  {
    title: 'HyperCard',
  },
  {
    title: 'Laser Printers',
  },
  {
    title: 'Comdex Special 1987',
  },
  {
    title: 'Local Area Networks Part 1  IBM Compatibles',
  },
  {
    title: 'Local Area Networks Part 2  Apple',
  },
  {
    title: 'Consumer Buying Guide 1987',
  },
  {
    title: 'Mac Business Software',
  },
  {
    title: 'Computer Games Part 1',
  },
  {
    title: 'Computer Games Part 2',
  },
  {
    title: 'Decision Support Software',
  },
  {
    title: 'PC Imaging',
  },
  {
    title: 'MacWorld San Francisco 1988',
  },
  {
    title: 'The New Amigas',
  },
  {
    title: 'CDROMs',
  },
  {
    title: 'Tax Preparation Software 1988',
  },
  {
    title: 'Shareware',
  },
  {
    title: 'The Commodore 64',
  },
  {
    title: 'Multitasking Operating Systems',
  },
  {
    title: 'Business Graphics Part 1  Mac',
  },
  {
    title: 'Business Graphics Part 2  PC',
  },
  {
    title: 'Input Devices',
  },
  {
    title: 'Computers and Politics 1988',
  },
  {
    title: 'Laptop Peripherals',
  },
  {
    title: 'AddOn Boards  Cards',
  },
  {
    title: 'Investment Software',
  },
  {
    title: 'Personal CAD Software',
  },
  {
    title: 'MacWorld Boston 1988',
  },
  {
    title: 'Computer Bowl I Part 1',
  },
  {
    title: 'Computer Bowl I Part 2',
  },
  {
    title: 'Bus Wars',
  },
  {
    title: 'The Apple II',
  },
  {
    title: 'Spreadsheet Wars',
  },
  {
    title: 'Consumer Buyers Guide',
  },
  {
    title: 'Comdex Special 1988',
  },
  {
    title: 'Hard Disk Management',
  },
  {
    title: 'Computer Viruses',
  },
  {
    title: 'Personal Information Management Software PIMS',
  },
  {
    title: 'MacWorld San Francisco 1989',
  },
  {
    title: 'Amiga 2500',
  },
  {
    title: 'Fax Boards',
  },
  {
    title: 'Writing Style Software',
  },
  {
    title: 'Foreign Language Software 1989',
  },
  {
    title: 'High Tech India Part 1',
  },
  {
    title: 'UNIX 1989',
  },
  {
    title: 'Atari ST',
  },
  {
    title: 'High Tech India Part 2',
  },
  {
    title: 'Computing in Color',
  },
  {
    title: 'New Generation Laptops',
  },
  {
    title: 'Computers in Space',
  },
  {
    title: 'Personal Finance Software 1989',
  },
  {
    title: 'Creativity Software',
  },
  {
    title: 'Artificial Intelligence 1989',
  },
  {
    title: 'New Portable Computers',
  },
  {
    title: 'Software for Kids 1989',
  },
  {
    title: 'Megahertz Mania',
  },
  {
    title: 'Desktop Presentation Graphics Part 1',
  },
  {
    title: 'Desktop Presentation Graphics Part 2',
  },
  {
    title: 'Holiday Buyers Guide',
  },
  {
    title: 'Software Piracy',
  },
  {
    title: 'DOS to Mac and Back',
  },
  {
    title: 'Computers and Fitness',
  },
  {
    title: 'Low Cost LANs',
  },
  {
    title: 'Computers and the Law',
  },
  {
    title: 'Optical Storage',
  },
  {
    title: 'Low Cost Laser Printers',
  },
  {
    title: 'Computer Ergonomics 1990',
  },
  {
    title: 'Programming Languages 1990',
  },
  {
    title: 'HyperCard Update',
  },
  {
    title: 'Desktop Video',
  },
  {
    title: 'Flight Simulators 1990',
  },
  {
    title: 'Computers on Campus',
  },
  {
    title: 'High Tech France Part 1',
  },
  {
    title: 'High Tech France Part 2',
  },
  {
    title: 'Computer Bowl II Part 1',
  },
  {
    title: 'Computer Bowl II Part 2',
  },
  {
    title: 'The Global Software Market',
  },
  {
    title: 'Windows 30',
  },
  {
    title: 'Hypertext',
  },
  {
    title: 'Rebirth of the Home Computer',
  },
  {
    title: 'Palmtop Computers',
  },
  {
    title: 'Input Devices',
  },
  {
    title: 'The Amiga 3000',
  },
  {
    title: 'Consumer Buying Guide 1990',
  },
  {
    title: 'Memory Management',
  },
  {
    title: 'Video Game Consoles',
  },
  {
    title: 'Computer Viruses 1990',
  },
  {
    title: 'Speech Technology',
  },
  {
    title: 'Macros',
  },
  {
    title: 'CDROM Software 1991',
  },
  {
    title: 'Sleeper Software',
  },
  {
    title: 'Flight Simulators 1991',
  },
  {
    title: 'Consumer Electronics Show CES 1991',
  },
  {
    title: 'Computers and Medicine',
  },
  {
    title: 'Scanners',
  },
  {
    title: 'Computers and Sports 1991',
  },
  {
    title: 'Software in the Schools',
  },
  {
    title: 'Fonts City',
  },
  {
    title: 'Network Security',
  },
  {
    title: 'Computer Bowl III Part 1',
  },
  {
    title: 'Computer Bowl III Part 2',
  },
  {
    title: 'Neural Networks',
  },
  {
    title: 'Macintosh System 70',
  },
  {
    title: 'Windows Applications',
  },
  {
    title: 'File Compression',
  },
  {
    title: 'Computer Displays',
  },
  {
    title: 'Foreign Language Software 1991',
  },
  {
    title: 'TandyRadio Shack Computers',
  },
  {
    title: 'Laptops and Handhelds',
  },
  {
    title: 'Computer Games 1991',
  },
  {
    title: 'PC Networks',
  },
  {
    title: 'Consumer Buying Guide 1991',
  },
  {
    title: 'Groupware',
  },
  {
    title: 'Integrated Software Suites',
  },
  {
    title: 'Build Your Own PC',
  },
  {
    title: 'Computer Video',
  },
  {
    title: 'Tax Preparation Software 1992',
  },
  {
    title: 'MIDI Music',
  },
  {
    title: 'Computers and the Disabled 1992',
  },
  {
    title: 'Intel 486',
  },
  {
    title: 'CDROM Software 1992',
  },
  {
    title: 'Space and Astronomy Software',
  },
  {
    title: 'Easy to Use Database Software',
  },
  {
    title: 'Virtual Reality',
  },
  {
    title: 'Computers and Kids 1992',
  },
  {
    title: 'Computer Bowl IV Part 1',
  },
  {
    title: 'Computer Bowl IV Part 2',
  },
  {
    title: 'Diagnostic Software',
  },
  {
    title: 'Comdex Spring',
  },
  {
    title: 'Computer Connectivity',
  },
  {
    title: 'Computers and Politics 1992',
  },
  {
    title: 'Computer Speech',
  },
  {
    title: 'Windows Enhancements Software',
  },
  {
    title: 'Windows Enhancements Hardware',
  },
  {
    title: 'ETRE Vienna',
  },
  {
    title: 'Secrets of Word Perfect',
  },
  {
    title: 'Consumer Buying Guide 1992',
  },
  {
    title: 'Comdex Fall',
  },
  {
    title: 'Notebook Computers',
  },
  {
    title: 'New Age Spreadsheets',
  },
  {
    title: 'Computer Art',
  },
  {
    title: 'Beginners Guide to Computing',
  },
  {
    title: 'Electronic Publishing',
  },
  {
    title: 'Computer Ergonomics 1993',
  },
  {
    title: 'CDROM Software 1993',
  },
  {
    title: 'Consumer Electronics Show CES 1993',
  },
  {
    title: 'OS2',
  },
  {
    title: 'Digital Photography',
  },
  {
    title: 'Creative Writing Software',
  },
  {
    title: 'The New Macs',
  },
  {
    title: 'Organizer Software',
  },
  {
    title: 'SPA Codie Awards 1993',
  },
  {
    title: 'Visual Programming Languages',
  },
  {
    title: 'Self Improvement Software',
  },
  {
    title: 'Computer Bowl V Part 1',
  },
  {
    title: 'Computer Bowl V Part 2',
  },
  {
    title: 'High Tech Israel',
  },
  {
    title: 'Baseball Software',
  },
  {
    title: 'PDAs',
  },
  {
    title: 'Pentium PCs',
  },
  {
    title: 'DOS 62',
  },
  {
    title: 'ETRE 1993 Barcelona',
  },
  {
    title: 'The Internet',
  },
  {
    title: 'Windows NT',
  },
  {
    title: 'Consumer Buying Guide 1993',
  },
  {
    title: 'Buying a New Computer',
  },
  {
    title: 'Comdex 1993',
  },
  {
    title: 'Digital Journalism',
  },
  {
    title: 'Color Printing',
  },
  {
    title: 'Tax Software',
  },
  {
    title: 'Screen Savers and Wallpapers',
  },
  {
    title: 'MacWorld San Francisco 1994',
  },
  {
    title: 'Small Business Software',
  },
  {
    title: 'Software for Kids 1994',
  },
  {
    title: 'Slots  Local Bus Video',
  },
  {
    title: 'Consumer Electronics Show CES 1994',
  },
  {
    title: 'Green PCs',
  },
  {
    title: 'EmailGroupware',
  },
  {
    title: 'Multimedia',
  },
  {
    title: 'CDROM Software 1994',
  },
  {
    title: 'Foreign Language Software 1994',
  },
  {
    title: 'Computer Bowl VI Part 1',
  },
  {
    title: 'Computer Bowl VI Part 2',
  },
  {
    title: 'PC Expo 1994',
  },
  {
    title: 'MacWorld Boston 1994',
  },
  {
    title: 'ETRE Conference Barcelona 1994',
  },
  {
    title: 'PowerPC and PowerMac',
  },
  {
    title: 'Computer Art',
  },
  {
    title: 'Plug and Play',
  },
  {
    title: 'Windows 40 aka Windows 95',
  },
  {
    title: 'Virtual Meetings',
  },
  {
    title: 'Consumers Buying Guide 1994',
  },
  {
    title: 'Comdex Special 1994',
  },
  {
    title: 'Talking Computers',
  },
  {
    title: 'Interactive Music',
  },
  {
    title: 'Digital Photo Finishing',
  },
  {
    title: 'Computer Games 1995',
  },
  {
    title: 'Computers and Sports 1995',
  },
  {
    title: 'Consumer Electronics Show CES 1995',
  },
  {
    title: 'OS2 Warp',
  },
  {
    title: 'Investment Software',
  },
  {
    title: 'Learning on a Computer',
  },
  {
    title: 'Computer Memory',
  },
  {
    title: 'SPA Codie Awards 1995',
  },
  {
    title: 'PC Video',
  },
  {
    title: 'Mobile Computing',
  },
  {
    title: 'Internet 1995',
  },
  {
    title: 'Computer Bowl VII Part 1',
  },
  {
    title: 'Gary Kildall Special',
  },
  {
    title: 'Windows 95',
  },
  {
    title: 'Mac Clones and New OS',
  },
  {
    title: 'Smart TV',
  },
  {
    title: 'Computers and Healthcare',
  },
  {
    title: 'Silicon Glen',
  },
  {
    title: 'Computing Seniors',
  },
  {
    title: 'Buy or Upgrade',
  },
  {
    title: 'Greatest Computer Games 1995',
  },
  {
    title: 'ETRE Conference Madrid 1995 Part 1',
  },
  {
    title: 'Holiday Buying Guide 1995',
  },
  {
    title: 'Comdex Special 1995',
  },
  {
    title: 'PC Troubleshooting',
  },
  {
    title: 'Information Overload',
  },
  {
    title: 'Computers and Kids 1996',
  },
  {
    title: 'ETRE Conference Madrid 1995 Part 2',
  },
  {
    title: 'SOHO Software',
  },
  {
    title: 'Consumer Electronics Show CES 1996',
  },
  {
    title: 'Online Tips',
  },
  {
    title: 'Financial Software',
  },
  {
    title: 'Silicon Glen Part 2',
  },
  {
    title: 'Software Thinking Tools',
  },
  {
    title: 'Cars and Computers',
  },
  {
    title: 'SPA Codie Awards 1996',
  },
  {
    title: 'The New PCs',
  },
  {
    title: 'E3 Special',
  },
  {
    title: 'MacWorld Boston 1996',
  },
  {
    title: 'Cyber Cafes',
  },
  {
    title: 'Internet Telephony',
  },
  {
    title: 'Search Engines',
  },
  {
    title: 'IT Forum Paris',
  },
  {
    title: 'Cyber Politics',
  },
  {
    title: 'Online Shopping',
  },
  {
    title: 'ETRE Conference Berlin 1996',
  },
  {
    title: 'Consumers Buying Guide 1996',
  },
  {
    title: 'Digital Photography',
  },
  {
    title: 'Greatest Games 1996',
  },
  {
    title: 'Internet TV',
  },
  {
    title: 'Comdex Special 1996',
  },
  {
    title: 'Wireless Computing',
  },
  {
    title: 'Sports Simulation Software',
  },
  {
    title: 'Cyber Dating',
  },
  {
    title: 'Consumer Electronics Show CES 1997',
  },
  {
    title: 'EMail',
  },
  {
    title: 'Computers and the Disabled 1997',
  },
  {
    title: 'Cyber Music',
  },
  {
    title: 'SPA Codie Awards 1997',
  },
  {
    title: 'Cyber Art',
  },
  {
    title: 'Cyber Security',
  },
  {
    title: 'Website Creation',
  },
  {
    title: 'Computer Bowl IX Part 1',
  },
  {
    title: 'Computer Bowl IX Part 2',
  },
  {
    title: 'Wireless Computing',
  },
  {
    title: 'Internet Showcase Special 1997',
  },
  {
    title: 'Push Technology',
  },
  {
    title: 'Internet Advertising',
  },
  {
    title: 'Java Tools',
  },
  {
    title: 'Virtual Universities',
  },
  {
    title: 'Cyber Fiction',
  },
  {
    title: 'Electronic Commerce',
  },
  {
    title: 'Battle of the Browsers',
  },
  {
    title: 'Consumers Buying Guide',
  },
  {
    title: 'Comdex Special 1997',
  },
  {
    title: 'Web Plugins',
  },
  {
    title: 'Cyber Privacy',
  },
  {
    title: 'Putting Your Business Online',
  },
  {
    title: 'Online Games',
  },
  {
    title: 'Home Design Software',
  },
  {
    title: 'Storage Solutions',
  },
  {
    title: 'Internet Showcase San Diego',
  },
  {
    title: 'Creating Your Own Website 1998',
  },
  {
    title: 'Desktop Video',
  },
  {
    title: 'Online Travel Planning',
  },
  {
    title: 'SPA Codie Awards 1998',
  },
  {
    title: 'Doc in a Box  Healthcare Software',
  },
  {
    title: 'Computer Bowl X Part 1',
  },
  {
    title: 'Computer Bowl X Part 2',
  },
  {
    title: 'Best of Comdex',
  },
  {
    title: 'Digital Living Room',
  },
  {
    title: 'Windows 98',
  },
  {
    title: 'Mac Update',
  },
  {
    title: 'Software Secrets',
  },
  {
    title: 'Internet Video Telephony',
  },
  {
    title: 'ETRE Conference Lisbon 1998 Part 1',
  },
  {
    title: 'ETRE Conference Lisbon 1998 Part 2',
  },
  {
    title: 'Web Radio',
  },
  {
    title: 'Consumers Buying Guide 1998',
  },
  {
    title: 'PDAs and Handhelds',
  },
  {
    title: 'Bill Gates Profile',
  },
  {
    title: 'Comdex 1998',
  },
  {
    title: 'ECommerce',
  },
  {
    title: '3D Graphics',
  },
  {
    title: 'Digital Photography',
  },
  {
    title: 'Computing for Parents',
  },
  {
    title: 'Tax Preparation Software',
  },
  {
    title: 'Fixing Your PC',
  },
  {
    title: 'Speech Technology',
  },
  {
    title: 'Internet Showcase 1999',
  },
  {
    title: 'Y2K',
  },
  {
    title: 'SPA Codie Awards 1999',
  },
  {
    title: 'Programming Languages',
  },
  {
    title: 'Creativity Software',
  },
  {
    title: 'EMail Update',
  },
  {
    title: 'Computer Games 1999',
  },
  {
    title: 'DVDs',
  },
  {
    title: 'TV Meets PC',
  },
  {
    title: 'Computer Crime',
  },
  {
    title: 'Digital Home Movies',
  },
  {
    title: 'Robots',
  },
  {
    title: 'Consumers Buying Guide 1999',
  },
  {
    title: 'ETRE Conference Monte Carlo 1999 Part 1',
  },
  {
    title: 'ETRE Conference Monte Carlo 1999 Part 2',
  },
  {
    title: 'Comdex Special 1999',
  },
  {
    title: 'Copyright Issues Online',
  },
  {
    title: 'Home Networks',
  },
  {
    title: 'ETRE Conference Monaco 1999 Part 3',
  },
  {
    title: 'Faster Net Access',
  },
  {
    title: 'Music on the PC',
  },
  {
    title: 'Computers without Keyboards',
  },
  {
    title: 'Internet Showcase Special 2000 Part 1',
  },
  {
    title: 'Internet Showcase Special 2000 Part 2',
  },
  {
    title: 'Cooking with Your PC',
  },
  {
    title: 'Online Investing',
  },
  {
    title: 'Computers and Politics 2000',
  },
  {
    title: 'Users Group Dayton Special',
  },
  {
    title: 'Digital Living Room Part 1',
  },
  {
    title: 'Digital Living Room Part 2',
  },
  {
    title: 'ETRE Conference Prague 2000 Part 1',
  },
  {
    title: 'ETRE Conference Prague 2000 Part 2',
  },
  {
    title: 'Consumers Buying Guide 2000',
  },
  {
    title: 'MP3 Secrets',
  },
  {
    title: 'ETRE Conference Prague 2000 Part 3',
  },
  {
    title: 'Computer Games and Gamers 2000',
  },
  {
    title: 'Privacy Online',
  },
  {
    title: 'Easy Webcams',
  },
  {
    title: 'High Tech Hawaii Part 1',
  },
  {
    title: 'High Tech Hawaii Part 2',
  },
  {
    title: 'High Tech Hawaii Part 3',
  },
  {
    title: 'High Tech Hawaii Part 4',
  },
  {
    title: 'Creating Your Own Website 2001',
  },
  {
    title: 'Consumer Electronics Show CES 2001',
  },
  {
    title: 'Wireless Technology',
  },
  {
    title: 'Finding a Job Online',
  },
  {
    title: 'Security and Viruses',
  },
  {
    title: 'Online Universities',
  },
  {
    title: 'Guide to Online Auctions',
  },
  {
    title: 'Ultimate Gaming PC',
  },
  {
    title: 'Interactive TV',
  },
  {
    title: 'Technology and the Church Part 1',
  },
  {
    title: 'Technology and the Church Part 2',
  },
  {
    title: 'Technology and the Church Part 3',
  },
  {
    title: 'Computers and the Pentagon 2001 Part 1',
  },
  {
    title: 'Computers and the Pentagon 2001 Part 2',
  },
  {
    title: 'ETRE Conference Rome 2001 Part 1',
  },
  {
    title: 'ETRE Conference Rome 2001 Part 2',
  },
  {
    title: 'ETRE Conference Rome 2001 Part 3',
  },
  {
    title: 'ETRE Conference Rome 2001 Part 4',
  },
  {
    title: 'Medical Technology Part 1',
  },
  {
    title: 'Medical Technology Part 2',
  },
  {
    title: 'Operating System  Browser Updates',
  },
  {
    title: 'Computers and the 2002 Olympics Part 1',
  },
  {
    title: 'Computers and the 2002 Olympics Part 2',
  },
  {
    title: 'Online Travel Tips',
  },
  {
    title: 'Preventing Spam',
  },
  {
    title: 'Computers and Healthcare',
  },
  {
    title: 'Windows XP',
  },
  {
    title: 'High Tech Singapore Part 1',
  },
  {
    title: 'High Tech Singapore Part 2',
  },
  {
    title: 'High Tech Singapore Part 3',
  },
];

const sixthBatch = cleanedTitles.slice(478, 568);
const seventhBatch = cleanedTitles.slice(568, 663);
const eighthBatch = cleanedTitles.slice(663, 758);
const ninthBatch = cleanedTitles.slice(758, 853);
const tenthBatch = cleanedTitles.slice(853); // Everything left

const API_KEY_6 = '';
const API_KEY_7 = '';
const API_KEY_8 = '';
const API_KEY_9 = '';
const API_KEY_10 = '';

const Getter = () => {
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return; // Prevent multiple calls
    hasFetched.current = true;

    async function getVideoData() {
      const output = [];
      console.log(cleanedTitles.length, ' <-- cleanedTitles to processzzzz');
      console.log(sixthBatch);
      for (const obj of sixthBatch) {
        console.log(obj, ' <<<<<');
        const title = obj.title;
        console.log(`computer chronicles ${title}`);

        // const response = await fetch(
        //   `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        //     `computer chronicles ${title}`
        //   )}&key=${API_KEY_6}`
        // );
        // const data = await response.json();

        // if (data.items && data.items.length > 0) {
        //   const videoId = data.items[0].id.videoId;
        //   const videoTitle = data.items[0].snippet.title;
        //   const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        //   const newObj = {
        //     ourTitle: title,
        //     ytTitle: videoTitle,
        //     url: videoUrl,
        //   };
        //   output.push(newObj);
        // }
      }

      // console.log(output);
    }

    getVideoData();
  }, []);

  return (
    <div>
      <h1>GETTING</h1>
    </div>
  );
};

export default Getter;
