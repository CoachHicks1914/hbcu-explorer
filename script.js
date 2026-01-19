// HBCU Content Database
const hbcuData = {
    howard: {
        name: "Howard University",
        intro: "Known as the 'Mecca' of Black education, Howard University has been a beacon of excellence since 1867. Located in Washington, D.C., Howard has produced Vice Presidents, Supreme Court Justices, and countless leaders who changed the world!",
        locations: {
            quad: {
                title: "The Yard at Howard",
                content: `
                    <h3>Welcome to The Yard!</h3>
                    <p>The Yard is the heart and soul of Howard University. This is where students gather between classes, where friendships are made, and where history happens!</p>
                    
                    <h3>A Legacy of Leadership</h3>
                    <p>Howard University was founded in 1867, just two years after the Civil War ended. It was created to educate formerly enslaved people and has grown into one of the most respected universities in the world!</p>
                    
                    <p>Howard's motto is "Truth and Service" - which means students learn the truth about the world and use that knowledge to serve their communities.</p>
                    
                    <h3>Famous Moments on The Yard</h3>
                    <ul>
                        <li>Vice President Kamala Harris graduated from Howard in 1986 and often returns to speak to students</li>
                        <li>The Yard is where students organized protests during the Civil Rights Movement</li>
                        <li>Homecoming on The Yard is legendary - thousands of alumni come back every year!</li>
                    </ul>
                `,
                quiz: {
                    question: "What is Howard University's motto?",
                    options: [
                        "Truth and Service",
                        "Knowledge and Power",
                        "Excellence Forever",
                        "Unity and Strength"
                    ],
                    correct: 0
                }
            },
            library: {
                title: "Founders Library",
                content: `
                    <h3>The Crown Jewel of Campus</h3>
                    <p>Founders Library sits at the top of The Yard like a crown, and inside, amazing things are waiting to be discovered!</p>
                    
                    <h3>World-Class Programs</h3>
                    <p>Howard students can study almost anything they dream of! Some of Howard's most famous programs include:</p>
                    <ul>
                        <li><strong>Medicine:</strong> Howard's medical school has trained more Black doctors than any other school in America</li>
                        <li><strong>Law:</strong> Future judges, lawyers, and the first Black Supreme Court Justice, Thurgood Marshall, studied here</li>
                        <li><strong>Communications:</strong> Many famous journalists, news anchors, and TV producers learned their craft at Howard</li>
                        <li><strong>Engineering:</strong> Howard engineers have worked at NASA, designed buildings, and created new technology</li>
                    </ul>
                    
                    <h3>The Moorland-Spingarn Research Center</h3>
                    <p>Inside Founders Library is one of the world's largest collections of materials about Black history and culture. Scholars from around the globe come here to research!</p>
                `,
                quiz: {
                    question: "Which famous Supreme Court Justice graduated from Howard University School of Law?",
                    options: [
                        "Ruth Bader Ginsburg",
                        "Thurgood Marshall",
                        "Clarence Thomas",
                        "Sonia Sotomayor"
                    ],
                    correct: 1
                }
            },
            stem: {
                title: "Howard STEM Excellence",
                content: `
                    <h3>Scientific Pioneers and Innovation</h3>
                    <p>Howard University has been producing brilliant scientists, engineers, and mathematicians for over 150 years!</p>
                    
                    <h3>Amazing Alumni in STEM</h3>
                    <ul>
                        <li><strong>Dr. Charles Drew:</strong> Invented the blood bank! His work saves millions of lives every year. Blood donations exist because of Dr. Drew's genius.</li>
                        <li><strong>Dr. Patricia Bath:</strong> First African American woman doctor to receive a patent for a medical invention - she created a laser device to treat cataracts and restore sight!</li>
                        <li><strong>Dr. LaSalle D. Leffall Jr.:</strong> First Black president of the American Cancer Society, pioneered cancer treatment research</li>
                        <li><strong>Dr. Alexa Canady:</strong> First Black woman neurosurgeon in the United States</li>
                    </ul>
                    
                    <h3>NASA Connection</h3>
                    <p>Many Howard graduates have worked at NASA as engineers, scientists, and astronauts, helping explore space and push the boundaries of what's possible!</p>
                `,
                quiz: {
                    question: "What did Dr. Charles Drew invent that saves millions of lives?",
                    options: [
                        "The stethoscope",
                        "The blood bank",
                        "X-ray machines",
                        "Antibiotics"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Howard Student Life & Culture",
                content: `
                    <h3>The HU Experience</h3>
                    <p>Being a Howard Bison means being part of a family that spans the entire globe!</p>
                    
                    <h3>Homecoming: The Greatest Show on Earth</h3>
                    <p>Howard's Homecoming is so legendary that people plan their entire year around it! For one week in October:</p>
                    <ul>
                        <li>The marching band performs spectacular shows</li>
                        <li>Famous Howard alumni come back to campus to celebrate</li>
                        <li>The fashion show is world-famous</li>
                        <li>The football game brings thousands to the stadium</li>
                    </ul>
                    
                    <h3>Greek Life & Leadership</h3>
                    <p>Howard is where many of the Divine Nine (historically Black fraternities and sororities) were founded or grew strong. These organizations teach leadership, service, and excellence.</p>
                    
                    <h3>Student Power</h3>
                    <p>Howard students don't just go to class - they change the world! Students here have:</p>
                    <ul>
                        <li>Led protests that changed laws</li>
                        <li>Started businesses that grew into major companies</li>
                        <li>Created art, music, and culture that defined generations</li>
                        <li>Built networks that help each other succeed forever</li>
                    </ul>
                `,
                quiz: {
                    question: "What is the nickname for Howard University students?",
                    options: [
                        "The Lions",
                        "The Eagles",
                        "The Bison",
                        "The Panthers"
                    ],
                    correct: 2
                }
            }
        }
    },
    spelman: {
        name: "Spelman College",
        intro: "Spelman College is the nation's leading liberal arts college for Black women. Founded in 1881 in Atlanta, Georgia, Spelman has been empowering brilliant Black women leaders for over 140 years!",
        locations: {
            quad: {
                title: "The Spelman Quad",
                content: `
                    <h3>The Heart of Sisterhood</h3>
                    <p>The Spelman Quad is where generations of brilliant Black women have walked, studied, laughed, and built lifelong friendships. This is sacred ground where excellence meets sisterhood!</p>
                    
                    <h3>A College Born from a Basement</h3>
                    <p>Spelman started in 1881 in the basement of a church in Atlanta with only 11 students! Two white teachers from New England, Sophia B. Packard and Harriet E. Giles, believed Black women deserved the best education possible.</p>
                    
                    <p>The school was named after Laura Spelman Rockefeller, whose family donated money to help the college grow. Today, Spelman educates over 2,000 brilliant young women!</p>
                    
                    <h3>The Spelman Motto</h3>
                    <p>"A Choice to Change the World" - Every Spelman woman makes a choice to use her education, her voice, and her power to make the world better!</p>
                `,
                quiz: {
                    question: "When was Spelman College founded?",
                    options: [
                        "1881",
                        "1901",
                        "1865",
                        "1920"
                    ],
                    correct: 0
                }
            },
            library: {
                title: "Academic Excellence at Spelman",
                content: `
                    <h3>Where Brilliance Becomes Legacy</h3>
                    <p>Spelman is ranked as the #1 HBCU in the nation and produces more Black women who go on to earn doctoral degrees than any other college!</p>
                    
                    <h3>Top Programs</h3>
                    <ul>
                        <li><strong>STEM:</strong> Spelman produces more Black women who become doctors and scientists than almost any school in America</li>
                        <li><strong>Political Science:</strong> Future mayors, congresswomen, and world leaders study here</li>
                        <li><strong>Arts:</strong> Writers, filmmakers, and artists learn to tell our stories</li>
                        <li><strong>Economics & Business:</strong> Future entrepreneurs and business leaders start here</li>
                    </ul>
                    
                    <h3>Study Abroad</h3>
                    <p>Over 40% of Spelman students study abroad - learning in countries all over the world while representing Spelman excellence everywhere they go!</p>
                    
                    <h3>Small Classes, Big Impact</h3>
                    <p>With small class sizes, Spelman professors know every student by name and help them achieve their dreams!</p>
                `,
                quiz: {
                    question: "What ranking does Spelman hold among HBCUs?",
                    options: [
                        "#3 HBCU",
                        "#5 HBCU",
                        "#1 HBCU",
                        "#10 HBCU"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "Spelman STEM Leaders",
                content: `
                    <h3>Black Women in Science</h3>
                    <p>Spelman has a special mission: to produce more Black women scientists, doctors, and engineers. And it's working!</p>
                    
                    <h3>Legendary Spelman STEM Alumni</h3>
                    <ul>
                        <li><strong>Dr. Audrey Forbes Manley:</strong> First woman president of Spelman, also a pediatrician who improved children's health across America</li>
                        <li><strong>Dr. Etta Zuber Falconer:</strong> Mathematician who created programs to help more Black students study math and science</li>
                        <li><strong>Rosalind Brewer:</strong> Studied chemistry at Spelman, became CEO of Walgreens - one of the most powerful business leaders in America!</li>
                        <li><strong>Many doctors, researchers, and scientists:</strong> Working at the CDC, NASA, hospitals, and research centers worldwide</li>
                    </ul>
                    
                    <h3>The Science Center</h3>
                    <p>Spelman's state-of-the-art Science Center has everything students need to become the next generation of Black women scientists changing the world!</p>
                `,
                quiz: {
                    question: "What did Rosalind Brewer study at Spelman before becoming a CEO?",
                    options: [
                        "Business",
                        "Chemistry",
                        "Computer Science",
                        "Biology"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Life as a Spelman Woman",
                content: `
                    <h3>Sisterhood for Life</h3>
                    <p>When you become a Spelman woman, you join a sisterhood that lasts forever. Spelman women support each other through college, careers, and life!</p>
                    
                    <h3>The Spelman-Morehouse Connection</h3>
                    <p>Spelman is right next door to Morehouse College (the brother school). Students can take classes at both schools and attend events together. Many friendships and relationships bloom between these two legendary schools!</p>
                    
                    <h3>Service & Leadership</h3>
                    <p>Every Spelman woman learns to lead. Through clubs, student government, and community service, students practice leading with wisdom and compassion.</p>
                    
                    <h3>Famous Spelman Women</h3>
                    <ul>
                        <li><strong>Marian Wright Edelman:</strong> Civil rights activist and founder of the Children's Defense Fund</li>
                        <li><strong>Alice Walker:</strong> Pulitzer Prize-winning author who wrote "The Color Purple"</li>
                        <li><strong>Stacey Abrams:</strong> Political leader, voting rights activist, and bestselling author</li>
                        <li><strong>Keisha Lance Bottoms:</strong> Former Mayor of Atlanta</li>
                    </ul>
                `,
                quiz: {
                    question: "Which Pulitzer Prize-winning author and Spelman graduate wrote 'The Color Purple'?",
                    options: [
                        "Toni Morrison",
                        "Maya Angelou",
                        "Alice Walker",
                        "Zora Neale Hurston"
                    ],
                    correct: 2
                }
            }
        }
    },
    morehouse: {
        name: "Morehouse College",
        intro: "Morehouse College is the nation's only historically Black liberal arts college for men. Founded in 1867 in Atlanta, Morehouse has produced leaders, innovators, and change-makers who shaped America and the world!",
        locations: {
            quad: {
                title: "The Morehouse Quad",
                content: `
                    <h3>Where Kings Are Made</h3>
                    <p>The Morehouse Quad is where young men become Morehouse Men - leaders prepared to change the world with wisdom, integrity, and excellence!</p>
                    
                    <h3>From Augusta to Atlanta</h3>
                    <p>Morehouse College started in 1867 in Augusta, Georgia, in the basement of Springfield Baptist Church. In 1879, the school moved to Atlanta, where it has been producing leaders ever since!</p>
                    
                    <h3>The Morehouse Motto</h3>
                    <p>"Et Facta Est Lux" - Latin for "And There Was Light." Morehouse believes education is the light that drives away darkness and ignorance!</p>
                    
                    <h3>The Morehouse Mystique</h3>
                    <p>There's something special about Morehouse Men. They walk with confidence, speak with purpose, and carry themselves with dignity. This is called the "Morehouse Mystique" - and it's real!</p>
                `,
                quiz: {
                    question: "What does Morehouse's Latin motto 'Et Facta Est Lux' mean in English?",
                    options: [
                        "Truth Forever",
                        "And There Was Light",
                        "Knowledge Is Power",
                        "Excellence Always"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Excellence at Morehouse",
                content: `
                    <h3>Training Leaders Since 1867</h3>
                    <p>Morehouse doesn't just teach subjects - it builds men who lead with integrity, serve with humility, and achieve with excellence!</p>
                    
                    <h3>Top Programs</h3>
                    <ul>
                        <li><strong>Business:</strong> Future entrepreneurs, CEOs, and business leaders start here</li>
                        <li><strong>Political Science:</strong> Morehouse has produced mayors, congressmen, and civil rights leaders</li>
                        <li><strong>Pre-Med:</strong> Many Morehouse graduates become doctors and medical researchers</li>
                        <li><strong>Engineering:</strong> Through partnerships, Morehouse men study cutting-edge engineering</li>
                    </ul>
                    
                    <h3>The Morehouse College School of Medicine</h3>
                    <p>Connected to Morehouse is a medical school that trains doctors who care for underserved communities!</p>
                    
                    <h3>The Crown Forum</h3>
                    <p>Every Tuesday, the entire college gathers for Crown Forum - where speakers, leaders, and scholars share wisdom with Morehouse students. It's been happening for over 100 years!</p>
                `,
                quiz: {
                    question: "What is the name of the weekly gathering where Morehouse students hear from leaders and scholars?",
                    options: [
                        "King's Circle",
                        "Crown Forum",
                        "Leadership Assembly",
                        "Morehouse Meeting"
                    ],
                    correct: 1
                }
            },
            stem: {
                title: "Morehouse STEM Excellence",
                content: `
                    <h3>Black Men in Science & Technology</h3>
                    <p>Morehouse is committed to producing more Black male scientists, doctors, engineers, and tech leaders. The world needs brilliant Black men in STEM!</p>
                    
                    <h3>Morehouse STEM Legends</h3>
                    <ul>
                        <li><strong>Dr. Robert Franklin:</strong> Morehouse president and theologian who emphasized leadership and service</li>
                        <li><strong>Edwin Moses:</strong> Physicist and Olympic gold medalist (he used physics to dominate the hurdles!)</li>
                        <li><strong>Herman "Skip" Mason:</strong> Engineer and historian who preserved Black history in Atlanta</li>
                        <li><strong>Many doctors and researchers:</strong> Working at the CDC, medical schools, and hospitals</li>
                    </ul>
                    
                    <h3>The Science Building</h3>
                    <p>State-of-the-art labs where future Black scientists conduct research and prepare for graduate school!</p>
                    
                    <h3>Partnership with Georgia Tech</h3>
                    <p>Morehouse students can study engineering at Georgia Tech through a special partnership - getting the best of both worlds!</p>
                `,
                quiz: {
                    question: "Which Olympic gold medalist studied physics at Morehouse?",
                    options: [
                        "Jesse Owens",
                        "Carl Lewis",
                        "Edwin Moses",
                        "Michael Johnson"
                    ],
                    correct: 2
                }
            },
            "student-center": {
                title: "The Morehouse Man Experience",
                content: `
                    <h3>Brotherhood for Life</h3>
                    <p>When you become a Morehouse Man, you join a brotherhood of leaders, thinkers, and change-makers that lasts forever!</p>
                    
                    <h3>The Most Famous Morehouse Man</h3>
                    <p><strong>Dr. Martin Luther King Jr.</strong> graduated from Morehouse in 1948. He learned leadership, courage, and the power of nonviolent protest here. Dr. King often said Morehouse gave him the foundation to lead the Civil Rights Movement!</p>
                    
                    <h3>Other Legendary Morehouse Men</h3>
                    <ul>
                        <li><strong>Spike Lee:</strong> World-famous filmmaker who tells powerful Black stories</li>
                        <li><strong>Samuel L. Jackson:</strong> One of the most famous actors in movie history</li>
                        <li><strong>Maynard Jackson:</strong> First Black mayor of Atlanta and a major Southern city</li>
                        <li><strong>Dr. Louis Sullivan:</strong> Former U.S. Secretary of Health and Human Services</li>
                    </ul>
                    
                    <h3>Morehouse-Spelman Love</h3>
                    <p>Morehouse and Spelman (the sister school) have been neighbors for over 100 years. Students share classes, attend events together, and build lifelong connections!</p>
                `,
                quiz: {
                    question: "Which civil rights leader graduated from Morehouse College in 1948?",
                    options: [
                        "Malcolm X",
                        "Dr. Martin Luther King Jr.",
                        "John Lewis",
                        "Thurgood Marshall"
                    ],
                    correct: 1
                }
            }
        }
    },
    ncat: {
        name: "North Carolina A&T State University",
        intro: "North Carolina A&T is the largest HBCU in the nation and a powerhouse in engineering, agriculture, and innovation. Founded in 1891 in Greensboro, NC, A&T students don't just learn - they DO!",
        locations: {
            quad: {
                title: "Aggie Pride on The Yard",
                content: `
                    <h3>Greatest Homecoming on Earth</h3>
                    <p>A&T's homecoming, called GHOE (Greatest Homecoming On Earth), brings over 100,000 people to Greensboro every year! The energy, the marching band, and Aggie Pride are legendary!</p>
                    
                    <h3>Founded to Serve</h3>
                    <p>NC A&T was founded in 1891 as an agricultural and mechanical school to help Black farmers and workers gain technical skills. Today, it's grown into the largest HBCU in America with over 13,000 students!</p>
                    
                    <h3>The Aggie Motto</h3>
                    <p>"Deed Not Words" - A&T students don't just talk about making change, they DO IT! This motto reflects the hands-on, action-oriented spirit of every Aggie.</p>
                    
                    <h3>The Sit-In Movement</h3>
                    <p>On February 1, 1960, four A&T freshmen (Ezell Blair Jr., David Richmond, Franklin McCain, and Joseph McNeil) sat at a whites-only lunch counter in Greensboro and refused to leave until they were served. This sparked the sit-in movement that helped end segregation!</p>
                `,
                quiz: {
                    question: "What is NC A&T's motto?",
                    options: [
                        "Action First",
                        "Deed Not Words",
                        "Work Not Talk",
                        "Excellence Through Doing"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Power at A&T",
                content: `
                    <h3>The Largest HBCU</h3>
                    <p>With over 13,000 students, A&T is the biggest HBCU in America! More Black students study engineering at A&T than at almost any other university!</p>
                    
                    <h3>Top Programs</h3>
                    <ul>
                        <li><strong>Engineering:</strong> A&T is ranked #1 in producing Black engineers - mechanical, electrical, civil, and more!</li>
                        <li><strong>Agriculture:</strong> The "A" in A&T stands for Agricultural - students learn sustainable farming and food science</li>
                        <li><strong>Business:</strong> The School of Business prepares future entrepreneurs and executives</li>
                        <li><strong>STEM Fields:</strong> Biology, chemistry, computer science, and mathematics programs are nationally recognized</li>
                    </ul>
                    
                    <h3>Doctoral Programs</h3>
                    <p>A&T offers doctoral degrees in engineering, making it one of the few HBCUs where you can earn a PhD!</p>
                    
                    <h3>Research Powerhouse</h3>
                    <p>A&T researchers work on everything from renewable energy to cybersecurity to transportation technology!</p>
                `,
                quiz: {
                    question: "In what field is NC A&T ranked #1 for producing Black graduates?",
                    options: [
                        "Medicine",
                        "Law",
                        "Engineering",
                        "Business"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "Engineering Excellence at A&T",
                content: `
                    <h3>The Engineering HBCU</h3>
                    <p>If you want to be a Black engineer, A&T is the place! More Black engineers graduate from A&T than almost anywhere else in America!</p>
                    
                    <h3>A&T Engineering Alumni</h3>
                    <ul>
                        <li><strong>Ronald McNair:</strong> NASA astronaut and physicist who died in the Challenger disaster. McNair Hall on campus honors his legacy!</li>
                        <li><strong>Thousands of engineers:</strong> Working at NASA, Boeing, Tesla, Google, and companies around the world</li>
                        <li><strong>Entrepreneurs:</strong> Starting companies that build everything from apps to aircraft</li>
                    </ul>
                    
                    <h3>The Joint School of Nanoscience</h3>
                    <p>A&T students study the smallest things in science - nanotechnology! This field creates materials and devices smaller than you can imagine!</p>
                    
                    <h3>Formula SAE Racing Team</h3>
                    <p>A&T students design and build actual race cars! They compete against universities worldwide and win championships!</p>
                    
                    <h3>Real-World Experience</h3>
                    <p>A&T students don't just learn theory - they build, create, and solve real problems. That's the Aggie way!</p>
                `,
                quiz: {
                    question: "Which NASA astronaut was an NC A&T alumnus?",
                    options: [
                        "Mae Jemison",
                        "Ronald McNair",
                        "Guion Bluford",
                        "Charles Bolden"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Aggie Life & Culture",
                content: `
                    <h3>Aggie Pride Forever</h3>
                    <p>Once you're an Aggie, you're ALWAYS an Aggie! The pride, the spirit, and the family feeling never go away!</p>
                    
                    <h3>The Blue & Gold Marching Machine</h3>
                    <p>A&T's marching band is one of the most famous bands in America! They've performed at NFL games, presidential inaugurations, and major events worldwide!</p>
                    
                    <h3>Greek Life</h3>
                    <p>A&T is home to strong chapters of the Divine Nine fraternities and sororities. Greek life at A&T means leadership, service, and lifelong brotherhood and sisterhood!</p>
                    
                    <h3>The Aggie-Eagle Classic</h3>
                    <p>The football rivalry between A&T and their crosstown rival is legendary! The game, the bands, and the atmosphere are electric!</p>
                    
                    <h3>Student Organizations</h3>
                    <p>From the National Society of Black Engineers to business clubs to cultural organizations, there's a place for every Aggie to lead and grow!</p>
                `,
                quiz: {
                    question: "What are the school colors of NC A&T?",
                    options: [
                        "Red & Black",
                        "Blue & Gold",
                        "Green & White",
                        "Purple & Orange"
                    ],
                    correct: 1
                }
            }
        }
    },
    famu: {
        name: "Florida A&M University",
        intro: "Florida A&M University (FAMU) is a public HBCU in Tallahassee, Florida, known for its excellence in journalism, pharmacy, engineering, and its world-famous marching band! Founded in 1887, FAMU's motto is 'Excellence with Caring.'",
        locations: {
            quad: {
                title: "The FAMU Campus",
                content: `
                    <h3>Highest of Seven Hills</h3>
                    <p>FAMU sits on the highest of Tallahassee's seven hills, overlooking Florida's capital city. The campus is beautiful, historic, and filled with Rattler Pride!</p>
                    
                    <h3>Founded for Excellence</h3>
                    <p>Florida A&M University was founded in 1887 to educate Black Floridians. What started with 15 students has grown into a university with over 9,000 students from around the world!</p>
                    
                    <h3>The Rattler Spirit</h3>
                    <p>FAMU students are called Rattlers (after the rattlesnake). Just like a rattler, FAMU students are fierce, focused, and unstoppable! When you mess with a Rattler, you get the fangs!</p>
                    
                    <h3>The FAMU Motto</h3>
                    <p>"Excellence with Caring" - FAMU believes in being the best while also caring for your community and lifting others up!</p>
                `,
                quiz: {
                    question: "What is FAMU's mascot?",
                    options: [
                        "The Eagles",
                        "The Tigers",
                        "The Rattlers",
                        "The Panthers"
                    ],
                    correct: 2
                }
            },
            library: {
                title: "Academic Excellence at FAMU",
                content: `
                    <h3>A University of Distinction</h3>
                    <p>FAMU is nationally ranked and internationally respected for producing graduates who excel in every field!</p>
                    
                    <h3>Top Programs</h3>
                    <ul>
                        <li><strong>Pharmacy:</strong> FAMU's pharmacy school is one of the best in the nation - many pharmacists you see are FAMU graduates!</li>
                        <li><strong>Journalism:</strong> The School of Journalism produces award-winning journalists, news anchors, and media professionals</li>
                        <li><strong>Engineering:</strong> FAMU-FSU College of Engineering is a powerhouse preparing Black engineers</li>
                        <li><strong>Business:</strong> Future CEOs and entrepreneurs learn here</li>
                        <li><strong>Architecture:</strong> One of the few HBCUs with an architecture program!</li>
                    </ul>
                    
                    <h3>Study Abroad</h3>
                    <p>FAMU students study in countries around the world, bringing Rattler excellence everywhere they go!</p>
                `,
                quiz: {
                    question: "Which professional program is FAMU especially famous for?",
                    options: [
                        "Dentistry",
                        "Pharmacy",
                        "Veterinary Medicine",
                        "Optometry"
                    ],
                    correct: 1
                }
            },
            stem: {
                title: "FAMU STEM Innovation",
                content: `
                    <h3>Science & Technology Leaders</h3>
                    <p>FAMU produces scientists, engineers, pharmacists, and researchers who are changing the world!</p>
                    
                    <h3>FAMU STEM Stars</h3>
                    <ul>
                        <li><strong>Thousands of pharmacists:</strong> FAMU graduates fill prescriptions and provide healthcare in communities across America</li>
                        <li><strong>Engineers:</strong> Working at NASA, Boeing, tech companies, and starting their own firms</li>
                        <li><strong>Researchers:</strong> Conducting groundbreaking research in health, environment, and technology</li>
                    </ul>
                    
                    <h3>FAMU-FSU College of Engineering</h3>
                    <p>This joint program with Florida State University allows FAMU students to study all types of engineering in state-of-the-art facilities!</p>
                    
                    <h3>Research Opportunities</h3>
                    <p>FAMU students conduct research as undergraduates, getting hands-on experience that prepares them for graduate school and careers!</p>
                `,
                quiz: {
                    question: "FAMU has a joint engineering program with which university?",
                    options: [
                        "University of Florida",
                        "Florida State University",
                        "Florida International University",
                        "University of Miami"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "The FAMU Experience",
                content: `
                    <h3>The Marching 100</h3>
                    <p>FAMU's marching band, "The Marching 100," is the most famous HBCU band in the world! They've performed at:</p>
                    <ul>
                        <li>Super Bowls and presidential inaugurations</li>
                        <li>Major movies and TV shows</li>
                        <li>Parades and events worldwide</li>
                        <li>They're so good, other bands study them!</li>
                    </ul>
                    
                    <h3>FAMU Homecoming</h3>
                    <p>FAMU's homecoming brings tens of thousands of alumni back to Tallahassee. The parade, the game, and the Marching 100 halftime show are absolutely legendary!</p>
                    
                    <h3>Greek Life & Organizations</h3>
                    <p>FAMU is home to powerful chapters of the Divine Nine and hundreds of student organizations. Leadership is everywhere on "The Hill"!</p>
                    
                    <h3>Famous Rattlers</h3>
                    <ul>
                        <li><strong>Althea Gibson:</strong> First Black athlete to win Wimbledon</li>
                        <li><strong>Congresswoman Carrie Meek:</strong> Served in the U.S. House of Representatives</li>
                        <li><strong>Pharmaceutical executives and healthcare leaders:</strong> Running major companies</li>
                    </ul>
                `,
                quiz: {
                    question: "What is the name of FAMU's world-famous marching band?",
                    options: [
                        "The Sound Machine",
                        "The Marching 100",
                        "The Rattler Band",
                        "The Pride of FAMU"
                    ],
                    correct: 1
                }
            }
        }
    }
};

// State Management
let currentUniversity = null;
let currentLocation = null;
let progress = {};

// Initialize App
function initApp() {
    loadProgress();
    updateAllProgress();
}

// Screen Management
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// University Selection
function selectUniversity(universityKey) {
    currentUniversity = universityKey;
    const university = hbcuData[universityKey];
    
    document.getElementById('university-name').textContent = university.name;
    document.getElementById('campus-intro').textContent = university.intro;
    
    // Update visited badges
    updateLocationBadges();
    
    showScreen('location-select');
}

// Location Selection
function visitLocation(locationKey) {
    currentLocation = locationKey;
    const university = hbcuData[currentUniversity];
    const location = university.locations[locationKey];
    
    document.getElementById('location-title').textContent = location.title;
    document.getElementById('location-description').innerHTML = location.content;
    
    // Setup quiz
    setupQuiz(location.quiz);
    
    // Check if already visited
    const visited = isLocationVisited(currentUniversity, currentLocation);
    const btn = document.getElementById('mark-visited-btn');
    if (visited) {
        btn.textContent = 'Already Visited ✓';
        btn.style.opacity = '0.6';
        btn.disabled = true;
    } else {
        btn.textContent = 'Mark as Visited ✓';
        btn.style.opacity = '1';
        btn.disabled = false;
    }
    
    showScreen('location-detail');
}

// Quiz Setup
function setupQuiz(quiz) {
    document.getElementById('quiz-question').textContent = quiz.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    
    quiz.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option';
        optionDiv.textContent = option;
        optionDiv.onclick = () => checkAnswer(index, quiz.correct);
        optionsContainer.appendChild(optionDiv);
    });
    
    document.getElementById('quiz-feedback').style.display = 'none';
    document.getElementById('quiz-feedback').className = '';
}

// Check Quiz Answer
function checkAnswer(selected, correct) {
    const options = document.querySelectorAll('.quiz-option');
    const feedback = document.getElementById('quiz-feedback');
    
    options.forEach((option, index) => {
        option.classList.add('disabled');
        option.onclick = null;
        
        if (index === correct) {
            option.classList.add('correct');
        }
        if (index === selected && index !== correct) {
            option.classList.add('incorrect');
        }
    });
    
    if (selected === correct) {
        feedback.textContent = '🎉 Correct! Great job!';
        feedback.className = 'correct';
    } else {
        feedback.textContent = '❌ Not quite! The correct answer is highlighted above.';
        feedback.className = 'incorrect';
    }
}

// Mark Location as Visited
function markLocationVisited() {
    if (!progress[currentUniversity]) {
        progress[currentUniversity] = {};
    }
    progress[currentUniversity][currentLocation] = true;
    
    saveProgress();
    updateAllProgress();
    updateLocationBadges();
    
    // Update button
    const btn = document.getElementById('mark-visited-btn');
    btn.textContent = 'Visited! ✓';
    btn.style.opacity = '0.6';
    btn.disabled = true;
    
    // Check if university is complete
    if (isUniversityComplete(currentUniversity)) {
        setTimeout(() => {
            showCertificate(currentUniversity);
        }, 1000);
    }
}

// Check if Location Visited
function isLocationVisited(university, location) {
    return progress[university] && progress[university][location];
}

// Check if University Complete
function isUniversityComplete(university) {
    const locations = ['quad', 'library', 'stem', 'student-center'];
    return locations.every(loc => isLocationVisited(university, loc));
}

// Update Location Badges
function updateLocationBadges() {
    document.querySelectorAll('.location-card').forEach((card, index) => {
        const locations = ['quad', 'library', 'stem', 'student-center'];
        const locationKey = locations[index];
        
        if (isLocationVisited(currentUniversity, locationKey)) {
            card.classList.add('visited');
        } else {
            card.classList.remove('visited');
        }
    });
}

// Update All Progress Indicators
function updateAllProgress() {
    // Update individual university progress
    Object.keys(hbcuData).forEach(uniKey => {
        const locations = ['quad', 'library', 'stem', 'student-center'];
        const visited = locations.filter(loc => isLocationVisited(uniKey, loc)).length;
        const percentage = (visited / 4) * 100;
        
        const progressText = document.querySelector(`.uni-progress[data-uni="${uniKey}"]`);
        const progressFill = document.querySelector(`.progress-fill[data-uni="${uniKey}"]`);
        
        if (progressText) progressText.textContent = `${visited}/4`;
        if (progressFill) progressFill.style.width = `${percentage}%`;
    });
    
    // Update total progress
    const totalLocations = Object.keys(hbcuData).length * 4;
    let totalVisited = 0;
    
    Object.keys(hbcuData).forEach(uniKey => {
        ['quad', 'library', 'stem', 'student-center'].forEach(loc => {
            if (isLocationVisited(uniKey, loc)) totalVisited++;
        });
    });
    
    const totalPercentage = Math.round((totalVisited / totalLocations) * 100);
    const totalProgressEl = document.getElementById('total-progress');
    if (totalProgressEl) {
        totalProgressEl.textContent = `${totalPercentage}%`;
    }
}

// Show Certificate
function showCertificate(university) {
    const universityName = hbcuData[university].name;
    document.getElementById('cert-university').textContent = universityName;
    
    const date = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('cert-date').textContent = date;
    
    showScreen('certificate');
}

// Back to Locations
function backToLocations() {
    showScreen('location-select');
}

// Progress Storage
function saveProgress() {
    localStorage.setItem('hbcu-explorer-progress', JSON.stringify(progress));
}

function loadProgress() {
    const saved = localStorage.getItem('hbcu-explorer-progress');
    if (saved) {
        progress = JSON.parse(saved);
    }
}

// Initialize on Load
window.addEventListener('DOMContentLoaded', initApp);
