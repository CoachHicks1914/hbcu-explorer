// HBCU Content Database
const hbcuData = {
    howard: {
        name: "Howard University",
        mascot: "Bison",
        colors: "#003A70, #E51937",
        intro: "Known as the 'Mecca' of Black education, Howard University has been a beacon of excellence since 1867. Located in Washington, D.C., Howard has produced Vice Presidents, Supreme Court Justices, and countless leaders who changed the world!",
        locations: {
            quad: {
                title: "The Yard at Howard",
                content: `
                    <h3>Quick Facts About Howard University</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Over 10,000 students</li>
                        <li><strong>Campus Size:</strong> 258 acres in Northwest Washington, D.C.</li>
                        <li><strong>Founded:</strong> March 2, 1867</li>
                        <li><strong>Colors:</strong> Red, White, and Blue</li>
                        <li><strong>Mascot:</strong> Bison</li>
                        <li><strong>Athletic Conference:</strong> Mid-Eastern Athletic Conference (MEAC)</li>
                        <li><strong>Newspaper:</strong> The Hilltop (student newspaper since 1924)</li>
                    </ul>
                    
                    <h3>Welcome to The Yard!</h3>
                    <p>The Yard is the heart and soul of Howard University. This is where students gather between classes, where friendships are made, and where history happens! The Yard is surrounded by iconic buildings including Founders Library, Douglass Hall, and the Armour J. Blackburn University Center.</p>
                    
                    <h3>A Legacy of Leadership</h3>
                    <p>Howard University was founded on March 2, 1867, just two years after the Civil War ended. It was created by members of the First Congregational Society of Washington to educate formerly enslaved people. The school is named after General Oliver Otis Howard, a Civil War hero who served as the university's third president.</p>
                    
                    <p>Howard's motto is "Veritas et Utilitas" which is Latin for "Truth and Service" - students learn the truth about the world and use that knowledge to serve their communities.</p>
                    
                    <h3>The Mecca of Black Education</h3>
                    <p>Howard is called "The Mecca" because it's considered the most important and influential HBCU in America. Students, faculty, and alumni have shaped Black culture, politics, medicine, law, and every field you can imagine!</p>
                    
                    <h3>Famous Moments on The Yard</h3>
                    <ul>
                        <li>Vice President Kamala Harris graduated from Howard in 1986 with degrees in political science and economics. She returns often to speak to students!</li>
                        <li>The Yard is where students organized protests during the Civil Rights Movement in the 1960s</li>
                        <li>Homecoming on The Yard is legendary - over 30,000 alumni come back every October!</li>
                        <li>President Barack Obama gave the 2016 commencement speech on The Yard</li>
                        <li>The Yard was the site of historic protests in 1989 when students demanded changes to curriculum and leadership</li>
                    </ul>
                `,
                quiz: {
                    question: "What is Howard University's motto in Latin?",
                    options: [
                        "Veritas et Utilitas",
                        "Et Facta Est Lux",
                        "Lux et Veritas",
                        "Per Aspera Ad Astra"
                    ],
                    correct: 0
                }
            },
            library: {
                title: "Founders Library - Academic Excellence",
                content: `
                    <h3>The Crown Jewel of Campus</h3>
                    <p>Founders Library sits at the top of The Yard like a crown. Built in 1939, it's an iconic landmark visible across Washington, D.C.!</p>
                    
                    <h3>Howard by the Numbers</h3>
                    <ul>
                        <li><strong>Total Students:</strong> Over 10,000</li>
                        <li><strong>Undergraduate Students:</strong> Approximately 7,000</li>
                        <li><strong>Graduate/Professional Students:</strong> Over 3,000</li>
                        <li><strong>Schools and Colleges:</strong> 14 schools and colleges</li>
                        <li><strong>Degree Programs:</strong> 120+ programs of study</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 10:1</li>
                    </ul>
                    
                    <h3>Howard's 14 Schools & Colleges</h3>
                    <ul>
                        <li>College of Arts and Sciences</li>
                        <li>School of Business</li>
                        <li>School of Communications</li>
                        <li>College of Dentistry</li>
                        <li>School of Divinity</li>
                        <li>School of Education</li>
                        <li>College of Engineering and Architecture</li>
                        <li>Graduate School</li>
                        <li>School of Law</li>
                        <li>College of Medicine</li>
                        <li>College of Nursing and Allied Health Sciences</li>
                        <li>College of Pharmacy</li>
                        <li>School of Social Work</li>
                        <li>Chadwick A. Boseman College of Fine Arts</li>
                    </ul>
                    
                    <h3>World-Famous Professional Schools</h3>
                    <ul>
                        <li><strong>Howard University School of Medicine:</strong> Founded in 1868, has trained more Black doctors than any medical school in America - over 50% of Black physicians have Howard connections!</li>
                        <li><strong>Howard University School of Law:</strong> Founded in 1869, trained civil rights lawyers who fought segregation, including Thurgood Marshall and Charles Hamilton Houston</li>
                        <li><strong>School of Communications:</strong> Produces award-winning journalists, filmmakers, and media executives</li>
                        <li><strong>College of Pharmacy:</strong> One of the oldest pharmacy schools for African Americans</li>
                        <li><strong>School of Business:</strong> Produces Fortune 500 executives and entrepreneurs</li>
                    </ul>
                    
                    <h3>Top Undergraduate Programs</h3>
                    <p>Popular majors include:</p>
                    <ul>
                        <li>Biology (Pre-Med track)</li>
                        <li>Political Science</li>
                        <li>Psychology</li>
                        <li>Communications</li>
                        <li>Chemistry</li>
                        <li>Engineering (Chemical, Civil, Computer, Electrical, Mechanical)</li>
                        <li>Business Administration</li>
                        <li>Nursing</li>
                    </ul>
                    
                    <h3>The Moorland-Spingarn Research Center (MSRC)</h3>
                    <p>Inside Founders Library is the MSRC - one of the world's largest and most comprehensive repositories for documenting the Black experience! It holds:</p>
                    <ul>
                        <li>Over 200,000 books</li>
                        <li>Manuscripts from famous Black writers and leaders</li>
                        <li>Artwork by Black artists</li>
                        <li>Historic photos and documents</li>
                        <li>Papers from Thurgood Marshall, Ralph Bunche, and other icons</li>
                    </ul>
                    
                    <h3>Study Abroad & Research</h3>
                    <p>Howard students study in countries worldwide and conduct research with professors starting freshman year!</p>
                `,
                quiz: {
                    question: "How many schools and colleges does Howard University have?",
                    options: [
                        "8",
                        "10",
                        "14",
                        "20"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "Howard STEM Excellence",
                content: `
                    <h3>Scientific Pioneers and Innovation</h3>
                    <p>Howard University has been producing brilliant scientists, engineers, and mathematicians for over 150 years!</p>
                    
                    <h3>STEM Quick Facts</h3>
                    <ul>
                        <li><strong>Medical School Graduates:</strong> Over 50% of Black doctors have Howard connections</li>
                        <li><strong>Research Funding:</strong> Over $90 million annually in research grants</li>
                        <li><strong>Engineering Programs:</strong> Chemical, Civil, Computer, Electrical, Mechanical, Systems</li>
                        <li><strong>Pre-Med Students:</strong> One of the highest numbers of Black students entering medical school</li>
                    </ul>
                    
                    <h3>Research Centers & Institutes</h3>
                    <ul>
                        <li><strong>Howard University Hospital:</strong> Teaching hospital where medical students train</li>
                        <li><strong>College of Medicine Research Centers:</strong> Cancer research, sickle cell disease, cardiovascular health</li>
                        <li><strong>Engineering Research:</strong> Artificial intelligence, cybersecurity, nanotechnology</li>
                        <li><strong>Howard University Middle School of Mathematics and Science:</strong> Pipeline program for future scientists</li>
                    </ul>
                    
                    <h3>Legendary Howard STEM Alumni</h3>
                    <ul>
                        <li><strong>Dr. Charles Drew (1904-1950):</strong> Graduated 1926. Invented the blood bank and blood plasma storage techniques. His innovations save millions of lives every year. Known as the "Father of the Blood Bank."</li>
                        <li><strong>Dr. Patricia Bath (1942-2019):</strong> Graduated Howard Medical School. First African American woman doctor to receive a medical patent - invented the Laserphaco Probe for cataract treatment, restoring sight to millions!</li>
                        <li><strong>Dr. LaSalle D. Leffall Jr. (1930-2019):</strong> First Black president of the American Cancer Society and pioneering cancer surgeon</li>
                        <li><strong>Dr. Alexa Canady (born 1950):</strong> First Black woman neurosurgeon in the United States</li>
                        <li><strong>Dr. David Blackwell (1919-2010):</strong> Mathematician, first Black scholar inducted into the National Academy of Sciences</li>
                        <li><strong>Dr. Herman Branson (1914-1995):</strong> Physicist and chemist who contributed to discovering the structure of proteins</li>
                    </ul>
                    
                    <h3>NASA & Space Science</h3>
                    <p>Many Howard graduates have worked at NASA including:</p>
                    <ul>
                        <li>Engineers designing spacecraft and satellites</li>
                        <li>Scientists conducting space research</li>
                        <li>Mathematicians calculating flight trajectories</li>
                        <li>Howard has partnerships with NASA Goddard Space Flight Center</li>
                    </ul>
                    
                    <h3>Medical Firsts</h3>
                    <ul>
                        <li>First medical school to graduate a Black woman (1864)</li>
                        <li>Trained more Black physicians than any other school</li>
                        <li>Pioneering research in sickle cell disease, cancer, and heart disease</li>
                    </ul>
                `,
                quiz: {
                    question: "Who invented the blood bank and graduated from Howard University?",
                    options: [
                        "Dr. Patricia Bath",
                        "Dr. Charles Drew",
                        "Dr. Alexa Canady",
                        "Dr. David Blackwell"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Howard Student Life & Culture",
                content: `
                    <h3>Student Body Quick Facts</h3>
                    <ul>
                        <li><strong>Total Enrollment:</strong> Over 10,000 students</li>
                        <li><strong>Undergraduate:</strong> ~7,000 students</li>
                        <li><strong>Graduate/Professional:</strong> ~3,000 students</li>
                        <li><strong>States Represented:</strong> All 50 states and over 70 countries</li>
                        <li><strong>On-Campus Housing:</strong> 11 residence halls</li>
                    </ul>
                    
                    <h3>The HU Experience</h3>
                    <p>Being a Howard Bison means being part of "The Mecca" - the most influential HBCU family that spans the entire globe!</p>
                    
                    <h3>Homecoming: The Greatest Show on Earth</h3>
                    <p>Howard's Homecoming Week in October is legendary - over 30,000 alumni return!</p>
                    <ul>
                        <li><strong>Yard Fest:</strong> Concerts and performances on The Yard</li>
                        <li><strong>Fashion Show:</strong> World-famous showcase of Black style and creativity</li>
                        <li><strong>Showtime Marching Band:</strong> The "Showtime" band performs spectacular halftime shows</li>
                        <li><strong>Football Game:</strong> Bison take on rivals at Greene Stadium</li>
                        <li><strong>Celebrity Appearances:</strong> Famous Howard alumni return every year</li>
                        <li><strong>Step Shows:</strong> Greek organizations compete in high-energy performances</li>
                    </ul>
                    
                    <h3>Athletics - The Bison</h3>
                    <ul>
                        <li><strong>Conference:</strong> Mid-Eastern Athletic Conference (MEAC)</li>
                        <li><strong>Division:</strong> NCAA Division I</li>
                        <li><strong>Stadium:</strong> Greene Stadium (10,000 capacity)</li>
                        <li><strong>Teams:</strong> Football, basketball, soccer, track & field, swimming, and more</li>
                        <li><strong>Rivals:</strong> Hampton University (annual rivalry game)</li>
                    </ul>
                    
                    <h3>Greek Life - Divine Nine Headquarters</h3>
                    <p>Howard is where 5 of the Divine Nine were founded!</p>
                    <ul>
                        <li><strong>Alpha Kappa Alpha Sorority, Inc.</strong> - Founded at Howard in 1908 (first Black sorority!)</li>
                        <li><strong>Omega Psi Phi Fraternity, Inc.</strong> - Founded at Howard in 1911</li>
                        <li><strong>Delta Sigma Theta Sorority, Inc.</strong> - Founded at Howard in 1913</li>
                        <li><strong>Phi Beta Sigma Fraternity, Inc.</strong> - Founded at Howard in 1914</li>
                        <li><strong>Zeta Phi Beta Sorority, Inc.</strong> - Founded at Howard in 1920</li>
                    </ul>
                    
                    <h3>Student Media & Organizations</h3>
                    <ul>
                        <li><strong>The Hilltop:</strong> Student newspaper since 1924</li>
                        <li><strong>WHUR 96.3 FM:</strong> Howard's radio station (one of the first Black-owned stations)</li>
                        <li><strong>Howard University Student Association (HUSA):</strong> Student government</li>
                        <li><strong>200+ student organizations</strong></li>
                    </ul>
                    
                    <h3>Famous Bison Beyond STEM</h3>
                    <ul>
                        <li><strong>Kamala Harris:</strong> Vice President of the United States (Class of 1986)</li>
                        <li><strong>Thurgood Marshall:</strong> First Black Supreme Court Justice (Law School)</li>
                        <li><strong>Toni Morrison:</strong> Nobel Prize-winning author</li>
                        <li><strong>Chadwick Boseman:</strong> Actor who played Black Panther (Fine Arts)</li>
                        <li><strong>Taraji P. Henson:</strong> Award-winning actress</li>
                        <li><strong>Sean "Diddy" Combs:</strong> Music mogul and entrepreneur</li>
                        <li><strong>Ta-Nehisi Coates:</strong> Award-winning author and journalist</li>
                        <li><strong>Phylicia Rashad:</strong> Tony Award-winning actress</li>
                        <li><strong>Elijah Cummings:</strong> U.S. Congressman and civil rights champion</li>
                        <li><strong>Andrew Young:</strong> Civil rights leader, congressman, UN Ambassador</li>
                    </ul>
                    
                    <h3>HU You Know - Howard Traditions</h3>
                    <ul>
                        <li><strong>"HU You Know!":</strong> The call-and-response chant Bison use to identify each other</li>
                        <li><strong>Charter Day:</strong> March 2nd celebration of Howard's founding</li>
                        <li><strong>Convocation:</strong> Opening ceremony where President speaks to the entire student body</li>
                        <li><strong>Bison Ball:</strong> Formal dance celebrating Howard pride</li>
                    </ul>
                `,
                quiz: {
                    question: "How many of the Divine Nine Greek organizations were founded at Howard?",
                    options: [
                        "2",
                        "3",
                        "5",
                        "All 9"
                    ],
                    correct: 2
                }
            }
        }
    },
    spelman: {
        name: "Spelman College",
        mascot: "Jaguar",
        colors: "#0033A0, #7BAFD4",
        intro: "Spelman College is the nation's leading liberal arts college for Black women. Founded in 1881 in Atlanta, Georgia, Spelman has been empowering brilliant Black women leaders for over 140 years!",
        locations: {
            quad: {
                title: "The Spelman Quad",
                content: `
                    <h3>Quick Facts About Spelman College</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Approximately 2,300 students</li>
                        <li><strong>Campus Size:</strong> 39 acres in Atlanta, Georgia</li>
                        <li><strong>Founded:</strong> April 11, 1881</li>
                        <li><strong>Colors:</strong> Columbia Blue (Light Blue)</li>
                        <li><strong>Mascot:</strong> Jaguar</li>
                        <li><strong>Athletic Conference:</strong> NCAA Division III</li>
                        <li><strong>Newspaper:</strong> The Spelmante (student newspaper)</li>
                        <li><strong>Type:</strong> Private women's liberal arts college</li>
                    </ul>
                    
                    <h3>The Heart of Sisterhood</h3>
                    <p>The Spelman Quad is where generations of brilliant Black women have walked, studied, laughed, and built lifelong friendships. This is sacred ground where excellence meets sisterhood!</p>
                    
                    <h3>A College Born from a Basement</h3>
                    <p>Spelman started on April 11, 1881, in the basement of Friendship Baptist Church in Atlanta with only 11 students! Two white teachers from New England - Sophia B. Packard and Harriet E. Giles - believed Black women deserved the best education possible.</p>
                    
                    <p>The school was originally called Atlanta Baptist Female Seminary. In 1884, it was renamed Spelman Seminary after Laura Spelman Rockefeller, whose husband John D. Rockefeller donated funds to help the college grow. In 1924, it became Spelman College!</p>
                    
                    <h3>The Spelman Motto</h3>
                    <p>"A Choice to Change the World" - Every Spelman woman makes a choice to use her education, her voice, and her power to make the world better!</p>
                    
                    <h3>#1 HBCU in America</h3>
                    <p>Spelman is consistently ranked as the #1 HBCU in the nation! It produces more Black women who go on to earn doctoral degrees than any other undergraduate institution in America!</p>
                    
                    <h3>Historic Campus Buildings</h3>
                    <ul>
                        <li><strong>Sisters Chapel:</strong> Where students gather for convocation and special events</li>
                        <li><strong>Rockefeller Hall:</strong> Named for the benefactor family</li>
                        <li><strong>Manley College Center:</strong> Student center and dining hall</li>
                        <li><strong>Laura Spelman Rockefeller Memorial Building:</strong> Administration building</li>
                    </ul>
                `,
                quiz: {
                    question: "How many students were in Spelman's first class in 1881?",
                    options: [
                        "5",
                        "11",
                        "25",
                        "50"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Excellence at Spelman",
                content: `
                    <h3>Academic Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~2,300 students (all women)</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 11:1</li>
                        <li><strong>Average Class Size:</strong> 18 students</li>
                        <li><strong>Academic Programs:</strong> 30+ majors</li>
                        <li><strong>Ranking:</strong> #1 HBCU in America (U.S. News & World Report)</li>
                        <li><strong>Type:</strong> Private liberal arts college</li>
                    </ul>
                    
                    <h3>Where Brilliance Becomes Legacy</h3>
                    <p>Spelman produces more Black women who go on to earn doctoral degrees than any other undergraduate institution in America! Over 30% of Spelman graduates pursue graduate or professional degrees.</p>
                    
                    <h3>Academic Divisions</h3>
                    <ul>
                        <li>Division of Natural Sciences and Mathematics</li>
                        <li>Division of Social Sciences and Interdisciplinary Studies</li>
                        <li>Division of Humanities and the Arts</li>
                    </ul>
                    
                    <h3>Top Academic Programs</h3>
                    <ul>
                        <li><strong>STEM:</strong> Biology, Chemistry, Physics, Mathematics, Computer Science, Biochemistry, Dual-Degree Engineering</li>
                        <li><strong>Political Science & Public Policy:</strong> Training future mayors, congresswomen, and policy makers</li>
                        <li><strong>Psychology:</strong> Nationally recognized program</li>
                        <li><strong>Economics:</strong> Preparing business leaders and financial experts</li>
                        <li><strong>English & Comparative Literature:</strong> Writers and scholars</li>
                        <li><strong>Art History & Studio Art:</strong> Artists and curators</li>
                        <li><strong>Music:</strong> Classical and contemporary musicians</li>
                        <li><strong>Women's Studies:</strong> First undergraduate women's studies program at an HBCU</li>
                    </ul>
                    
                    <h3>Dual-Degree Engineering Program</h3>
                    <p>Spelman students can study 3 years at Spelman and 2 years at partner engineering schools (Georgia Tech, Columbia, Auburn, etc.) and earn TWO degrees - a bachelor's from Spelman AND an engineering degree from the partner school!</p>
                    
                    <h3>Study Abroad & Global Learning</h3>
                    <ul>
                        <li><strong>Over 40%</strong> of Spelman students study abroad</li>
                        <li><strong>Programs in:</strong> Ghana, Brazil, Japan, Spain, France, South Africa, and 30+ countries</li>
                        <li><strong>Spelman in Ghana:</strong> Signature program connecting students to African heritage</li>
                        <li><strong>UN Internships:</strong> Students intern at the United Nations</li>
                    </ul>
                    
                    <h3>Research Opportunities</h3>
                    <ul>
                        <li>Summer Undergraduate Research Experience (SURE) - paid research positions</li>
                        <li>Spelman students present research at national conferences</li>
                        <li>Work with professors on cutting-edge research</li>
                        <li>Access to Atlanta University Center consortium resources</li>
                    </ul>
                    
                    <h3>Academic Facilities</h3>
                    <ul>
                        <li><strong>Albro-Falconer-Manley Science Center:</strong> State-of-the-art STEM labs</li>
                        <li><strong>Woodruff Library:</strong> Part of Atlanta University Center consortium</li>
                        <li><strong>Digital Moving Image Salon (DMIS):</strong> Film and media production</li>
                    </ul>
                `,
                quiz: {
                    question: "What percentage of Spelman students study abroad?",
                    options: [
                        "10%",
                        "25%",
                        "Over 40%",
                        "60%"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "Spelman STEM Leaders",
                content: `
                    <h3>Black Women in Science - The Spelman Mission</h3>
                    <p>Spelman has a special mission: to produce more Black women scientists, doctors, and engineers. And it's working!</p>
                    
                    <h3>STEM Achievement Numbers</h3>
                    <ul>
                        <li><strong>Medical School Acceptance:</strong> Spelman students are accepted to medical school at TWICE the national average</li>
                        <li><strong>PhD Production:</strong> #1 producer of Black women who earn science PhDs</li>
                        <li><strong>NASA Partnership:</strong> Spelman is a NASA University Leadership Initiative institution</li>
                        <li><strong>STEM Majors:</strong> Over 40% of students major in STEM fields</li>
                    </ul>
                    
                    <h3>STEM Programs & Facilities</h3>
                    <ul>
                        <li><strong>Biology:</strong> Pre-med track, research labs</li>
                        <li><strong>Chemistry & Biochemistry:</strong> State-of-the-art labs</li>
                        <li><strong>Physics:</strong> Research opportunities from freshman year</li>
                        <li><strong>Mathematics:</strong> Pure and applied mathematics</li>
                        <li><strong>Computer Science:</strong> AI, cybersecurity, software development</li>
                        <li><strong>Environmental Science:</strong> Sustainability and ecology</li>
                        <li><strong>Dual-Degree Engineering:</strong> 3-2 program with top engineering schools</li>
                    </ul>
                    
                    <h3>Legendary Spelman STEM Alumni</h3>
                    <ul>
                        <li><strong>Dr. Audrey Forbes Manley (Class of 1955):</strong> Pediatrician and former Acting U.S. Surgeon General. Later became Spelman's first woman president (1997-2002).</li>
                        <li><strong>Dr. Etta Zuber Falconer (1933-2002):</strong> Mathematician who created programs to help more Black students study math and science. Has a building named after her at Spelman!</li>
                        <li><strong>Rosalind Brewer (Class of 1984):</strong> Studied chemistry at Spelman, became CEO of Walgreens (2021), one of only 2 Black women CEOs of Fortune 500 companies. Previously COO of Starbucks and CEO of Sam's Club.</li>
                        <li><strong>Dr. Mae Jemison:</strong> First Black woman in space (NASA astronaut), studied at Stanford but has strong Spelman connections</li>
                        <li><strong>Hundreds of doctors:</strong> Practicing medicine at hospitals nationwide</li>
                        <li><strong>Scientists at CDC:</strong> The Centers for Disease Control is in Atlanta - many Spelman scientists work there</li>
                        <li><strong>Engineers:</strong> Working at Microsoft, Google, NASA, Boeing</li>
                    </ul>
                    
                    <h3>Research Programs</h3>
                    <ul>
                        <li><strong>Summer Undergraduate Research Experience (SURE):</strong> Students conduct paid research</li>
                        <li><strong>Spelman-Xavier-Tulane Research Partnership:</strong> Biomedical research collaboration</li>
                        <li><strong>NASA Research:</strong> Space science and engineering projects</li>
                        <li><strong>Environmental Justice Research:</strong> Community-based environmental science</li>
                    </ul>
                    
                    <h3>The Science Center</h3>
                    <p>The Albro-Falconer-Manley Science Center (named after pioneering Black women scientists) has:</p>
                    <ul>
                        <li>Modern research laboratories</li>
                        <li>Computer science labs</li>
                        <li>Biology, chemistry, and physics labs</li>
                        <li>Collaborative learning spaces</li>
                        <li>Equipment for cutting-edge research</li>
                    </ul>
                `,
                quiz: {
                    question: "Which Spelman graduate became CEO of Walgreens?",
                    options: [
                        "Dr. Audrey Forbes Manley",
                        "Rosalind Brewer",
                        "Dr. Etta Zuber Falconer",
                        "Mae Jemison"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Life as a Spelman Woman",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~2,300 (all women)</li>
                        <li><strong>States Represented:</strong> 44 states</li>
                        <li><strong>International Students:</strong> 12 countries</li>
                        <li><strong>On-Campus Housing:</strong> 82% live on campus</li>
                        <li><strong>Student Organizations:</strong> 80+ clubs and organizations</li>
                    </ul>
                    
                    <h3>Sisterhood for Life</h3>
                    <p>When you become a Spelman woman, you join a sisterhood that lasts forever. The Spelman Network supports women through college, careers, and life! Spelman alumnae are in every field imaginable - and they lift each other up!</p>
                    
                    <h3>The Spelman-Morehouse Connection</h3>
                    <p>Spelman is right next door to Morehouse College (the brother school). Students can take classes at both schools through the Atlanta University Center Consortium (includes Spelman, Morehouse, Clark Atlanta, and Morehouse School of Medicine). Many friendships and relationships bloom between these legendary schools!</p>
                    
                    <h3>Service & Leadership</h3>
                    <p>Every Spelman woman learns to lead. The college motto "A Choice to Change the World" isn't just words - it's a commitment! Students engage in:</p>
                    <ul>
                        <li>Community service (required for graduation)</li>
                        <li>Student Government Association leadership</li>
                        <li>Social justice advocacy</li>
                        <li>Global citizenship programs</li>
                    </ul>
                    
                    <h3>Athletics - The Jaguars</h3>
                    <ul>
                        <li><strong>Conference:</strong> NCAA Division III</li>
                        <li><strong>Teams:</strong> Basketball, volleyball, soccer, tennis, cross country, track & field</li>
                        <li><strong>Facilities:</strong> Spelman Recreation and Wellness Center</li>
                    </ul>
                    
                    <h3>Greek Life</h3>
                    <p>Spelman is home to the four Divine Nine sororities:</p>
                    <ul>
                        <li>Alpha Kappa Alpha Sorority, Inc.</li>
                        <li>Delta Sigma Theta Sorority, Inc.</li>
                        <li>Zeta Phi Beta Sorority, Inc.</li>
                        <li>Sigma Gamma Rho Sorority, Inc.</li>
                    </ul>
                    
                    <h3>Student Organizations & Activities</h3>
                    <ul>
                        <li><strong>The Spelmanite (student newspaper)</strong></li>
                        <li><strong>The Jaguarettes (dance team)</strong> - Competing at Nationals in 2027!</li>
                        <li><strong>CheerTron</strong> - Spelman's cheer squad supporting Morehouse football</li>
                        <li><strong>Mahogany in Motion (dance team)</strong></li>
                        <li><strong>Spelman College Glee Club</strong></li>
                        <li><strong>Pre-Med/Pre-Law clubs</strong></li>
                        <li><strong>National Society of Black Engineers (NSBE)</strong></li>
                        <li><strong>Cultural organizations</strong></li>
                    </ul>
                    
                    <h3>Spelman Traditions</h3>
                    <ul>
                        <li><strong>Founders Day:</strong> April 11th celebration of Spelman's founding</li>
                        <li><strong>Convocation:</strong> Opening ceremony in Sisters Chapel</li>
                        <li><strong>Sisters Chapel Gathering:</strong> Weekly community gathering</li>
                        <li><strong>Spelbound (admitted students day)</strong></li>
                        <li><strong>Senior Send-Off:</strong> Celebrating graduating seniors</li>
                    </ul>
                    
                    <h3>Famous Spelman Women</h3>
                    <ul>
                        <li><strong>Marian Wright Edelman (Class of 1960):</strong> Civil rights activist and founder of the Children's Defense Fund</li>
                        <li><strong>Alice Walker (Class of 1965):</strong> Pulitzer Prize-winning author who wrote "The Color Purple"</li>
                        <li><strong>Stacey Abrams (Class of 1995):</strong> Political leader, voting rights activist, author, and entrepreneur</li>
                        <li><strong>Keshia Knight Pulliam (Class of 2001):</strong> Actress who played Rudy on "The Cosby Show"</li>
                        <li><strong>Rosalind Brewer (Class of 1984):</strong> CEO of Walgreens</li>
                        <li><strong>Bernice King:</strong> Youngest daughter of Dr. Martin Luther King Jr., civil rights leader</li>
                        <li><strong>Valeisha Butterfield Jones:</strong> Entertainment executive and advocate</li>
                    </ul>
                    
                    <h3>Spelman in Atlanta</h3>
                    <p>Being in Atlanta means Spelman students have access to:</p>
                    <ul>
                        <li>Internships at Fortune 500 companies (Coca-Cola, Delta, Home Depot)</li>
                        <li>The CDC (Centers for Disease Control)</li>
                        <li>Film and entertainment industry opportunities</li>
                        <li>Rich Black cultural history and community</li>
                    </ul>
                `,
                quiz: {
                    question: "Which Pulitzer Prize-winning author graduated from Spelman and wrote 'The Color Purple'?",
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
        mascot: "Maroon Tiger",
        colors: "#800020, #000000",
        intro: "Morehouse College is the nation's only historically Black liberal arts college for men. Founded in 1867 in Atlanta, Morehouse has produced leaders, innovators, and change-makers who shaped America and the world!",
        locations: {
            quad: {
                title: "The Morehouse Quad",
                content: `
                    <h3>Quick Facts About Morehouse College</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Approximately 2,200 students (all men)</li>
                        <li><strong>Campus Size:</strong> 61 acres in Atlanta, Georgia</li>
                        <li><strong>Founded:</strong> February 14, 1867</li>
                        <li><strong>Colors:</strong> Maroon and White</li>
                        <li><strong>Mascot:</strong> Maroon Tiger</li>
                        <li><strong>Athletic Conference:</strong> Southern Intercollegiate Athletic Conference (SIAC)</li>
                        <li><strong>Type:</strong> Private liberal arts college for men</li>
                    </ul>
                    
                    <h3>Where Kings Are Made</h3>
                    <p>The Morehouse Quad is where young men become Morehouse Men - leaders prepared to change the world with wisdom, integrity, and excellence! Walking across the Quad, you're walking where Dr. Martin Luther King Jr., Spike Lee, and thousands of Black male leaders walked before you.</p>
                    
                    <h3>From Augusta to Atlanta</h3>
                    <p>Morehouse College was founded on February 14, 1867, in Augusta, Georgia, in the basement of Springfield Baptist Church. It was originally called Augusta Institute. In 1879, the school moved to Atlanta. In 1913, it was renamed Morehouse College in honor of Henry Lyman Morehouse, a white minister and educator who supported the school.</p>
                    
                    <h3>The Morehouse Motto</h3>
                    <p>"Et Facta Est Lux" (Latin for "And There Was Light") - Morehouse believes education is the light that drives away darkness and ignorance! This motto reflects the college's commitment to enlightenment, knowledge, and service.</p>
                    
                    <h3>The Morehouse Mystique</h3>
                    <p>There's something special about Morehouse Men. They walk with confidence, speak with purpose, and carry themselves with dignity. This is called the "Morehouse Mystique" - and it's real! It's a combination of:</p>
                    <ul>
                        <li>Academic excellence</li>
                        <li>Social responsibility</li>
                        <li>Strong moral character</li>
                        <li>Leadership development</li>
                        <li>Professional dress (Morehouse men are known for dressing well!)</li>
                    </ul>
                    
                    <h3>Historic Campus Buildings</h3>
                    <ul>
                        <li><strong>Martin Luther King Jr. International Chapel:</strong> Where weekly convocations are held</li>
                        <li><strong>Frederick Douglass Commons:</strong> Student center and dining hall</li>
                        <li><strong>Graves Hall:</strong> Academic building</li>
                        <li><strong>Sale Hall:</strong> Administration building</li>
                    </ul>
                `,
                quiz: {
                    question: "What year was Morehouse College founded?",
                    options: [
                        "1865",
                        "1867",
                        "1879",
                        "1913"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Excellence at Morehouse",
                content: `
                    <h3>Academic Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~2,200 (all men)</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 12:1</li>
                        <li><strong>Academic Programs:</strong> 27 majors</li>
                        <li><strong>Graduate Programs:</strong> MBA program offered</li>
                        <li><strong>Study Abroad:</strong> Programs in 20+ countries</li>
                    </ul>
                    
                    <h3>Training Leaders Since 1867</h3>
                    <p>Morehouse doesn't just teach subjects - it builds men who lead with integrity, serve with humility, and achieve with excellence! The Morehouse mission produces "Renaissance Men" - well-rounded leaders prepared for any challenge.</p>
                    
                    <h3>Academic Programs & Majors</h3>
                    <ul>
                        <li><strong>Business Administration & Economics:</strong> Entrepreneurship, finance, accounting, marketing</li>
                        <li><strong>Biology (Pre-Med):</strong> Preparing future doctors</li>
                        <li><strong>Political Science:</strong> Training future lawmakers and policy makers</li>
                        <li><strong>Psychology:</strong> Mental health and counseling pathways</li>
                        <li><strong>English:</strong> Writers, journalists, and communicators</li>
                        <li><strong>Computer Science:</strong> Software development and technology</li>
                        <li><strong>Engineering (Dual-Degree):</strong> 3-2 programs with Georgia Tech, Columbia, Boston U</li>
                        <li><strong>Mathematics:</strong> Pure and applied mathematics</li>
                        <li><strong>Chemistry:</strong> Research and pharmaceutical science</li>
                        <li><strong>History:</strong> African American history and global perspectives</li>
                        <li><strong>Cinema, Television & Emerging Media:</strong> Film production and media studies</li>
                    </ul>
                    
                    <h3>The Morehouse College School of Medicine</h3>
                    <p>Founded in 1975, Morehouse School of Medicine (a separate institution but closely connected) is dedicated to training doctors who will serve underserved communities. Many Morehouse College graduates go there for medical school!</p>
                    
                    <h3>The Crown Forum</h3>
                    <p>Every Tuesday at 11am, the ENTIRE college gathers in Martin Luther King Jr. International Chapel for Crown Forum. This tradition has continued for over 100 years! Students hear from:</p>
                    <ul>
                        <li>World leaders and politicians</li>
                        <li>CEOs and entrepreneurs</li>
                        <li>Artists and entertainers</li>
                        <li>Scholars and professors</li>
                        <li>Morehouse alumni sharing their success stories</li>
                    </ul>
                    
                    <h3>Atlanta University Center Consortium</h3>
                    <p>Morehouse students can take classes at Spelman, Clark Atlanta, and other AUC schools, giving them access to even more programs and resources!</p>
                    
                    <h3>Research & Honors Programs</h3>
                    <ul>
                        <li><strong>Morehouse Research Institute:</strong> Students conduct research with professors</li>
                        <li><strong>Honors Program:</strong> Advanced curriculum for high-achieving students</li>
                        <li><strong>Bonner Scholars:</strong> Community service scholars</li>
                    </ul>
                `,
                quiz: {
                    question: "What is the weekly Tuesday gathering called where the entire Morehouse community assembles?",
                    options: [
                        "King's Forum",
                        "Crown Forum",
                        "Leadership Assembly",
                        "Chapel Hour"
                    ],
                    correct: 1
                }
            },
            stem: {
                title: "Morehouse STEM Excellence",
                content: `
                    <h3>Black Men in Science & Technology</h3>
                    <p>Morehouse is committed to producing more Black male scientists, doctors, engineers, and tech leaders. The world needs brilliant Black men in STEM!</p>
                    
                    <h3>STEM Quick Facts</h3>
                    <ul>
                        <li><strong>Pre-Med Success:</strong> High acceptance rate to medical schools</li>
                        <li><strong>Research Funding:</strong> Millions in STEM research grants annually</li>
                        <li><strong>Dual-Degree Engineering:</strong> 3-2 programs with top engineering schools</li>
                        <li><strong>NASA Partnership:</strong> Morehouse partners with NASA for research opportunities</li>
                    </ul>
                    
                    <h3>STEM Programs</h3>
                    <ul>
                        <li><strong>Biology:</strong> Pre-med, pre-dental, research science</li>
                        <li><strong>Chemistry:</strong> Pharmaceutical science, research</li>
                        <li><strong>Physics:</strong> Theoretical and applied physics</li>
                        <li><strong>Mathematics:</strong> Pure math, applied math, actuarial science</li>
                        <li><strong>Computer Science:</strong> Software engineering, cybersecurity, AI</li>
                        <li><strong>Engineering (3-2 Program):</strong> Partner with Georgia Tech, Columbia, others</li>
                    </ul>
                    
                    <h3>Morehouse STEM Legends</h3>
                    <ul>
                        <li><strong>Edwin Moses (Class of 1978):</strong> Won Olympic gold medals in 400m hurdles (1976, 1984). Studied physics at Morehouse and used his understanding of biomechanics to dominate his sport! Undefeated for nearly 10 years.</li>
                        <li><strong>Dr. David Satcher (Class of 1963):</strong> 16th Surgeon General of the United States (1998-2002). Also served as Director of the CDC.</li>
                        <li><strong>Dr. Louis Sullivan (Class of 1954):</strong> U.S. Secretary of Health and Human Services (1989-1993), founded Morehouse School of Medicine</li>
                        <li><strong>Herman "Skip" Mason Jr.:</strong> Engineer, historian, and preservationist of Black history in Atlanta</li>
                        <li><strong>Hundreds of doctors:</strong> Practicing medicine nationwide, many at Morehouse School of Medicine</li>
                        <li><strong>Scientists at CDC:</strong> Morehouse graduates work at the Centers for Disease Control in Atlanta</li>
                        <li><strong>Engineers and tech leaders:</strong> Working at Google, Microsoft, NASA, and tech startups</li>
                    </ul>
                    
                    <h3>Research Centers & Facilities</h3>
                    <ul>
                        <li><strong>Science Center:</strong> Modern labs for biology, chemistry, physics research</li>
                        <li><strong>Morehouse Research Institute:</strong> Supports undergraduate research</li>
                        <li><strong>NASA Partnerships:</strong> Students work on space science projects</li>
                    </ul>
                    
                    <h3>Partnership with Georgia Tech</h3>
                    <p>Morehouse students can study engineering through a 3-2 dual-degree program with Georgia Tech! Students spend 3 years at Morehouse building a strong liberal arts foundation, then 2 years at Georgia Tech studying engineering. They graduate with TWO degrees - a bachelor's from Morehouse AND an engineering degree from Georgia Tech!</p>
                    
                    <h3>Pre-Med Pipeline</h3>
                    <p>Many Morehouse graduates go on to medical school, with strong acceptance rates at:</p>
                    <ul>
                        <li>Morehouse School of Medicine</li>
                        <li>Emory University School of Medicine</li>
                        <li>Howard University College of Medicine</li>
                        <li>Meharry Medical College</li>
                        <li>And top medical schools nationwide</li>
                    </ul>
                `,
                quiz: {
                    question: "Which Morehouse graduate served as U.S. Surgeon General?",
                    options: [
                        "Edwin Moses",
                        "Dr. David Satcher",
                        "Dr. Louis Sullivan",
                        "Dr. Martin Luther King Jr."
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "The Morehouse Man Experience",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~2,200 (all men)</li>
                        <li><strong>States Represented:</strong> 42 states and 15 countries</li>
                        <li><strong>On-Campus Housing:</strong> 60% live on campus</li>
                        <li><strong>Student Organizations:</strong> 100+ clubs and organizations</li>
                    </ul>
                    
                    <h3>Brotherhood for Life</h3>
                    <p>When you become a Morehouse Man, you join a brotherhood of leaders, thinkers, and change-makers that lasts forever! The Morehouse Network connects alumni worldwide in business, government, entertainment, and every field.</p>
                    
                    <h3>The Most Famous Morehouse Man</h3>
                    <p><strong>Dr. Martin Luther King Jr. (Class of 1948)</strong> graduated from Morehouse at age 19 with a degree in sociology. He learned leadership, courage, and the power of nonviolent protest from Morehouse President Benjamin Mays. Dr. King often said Morehouse gave him the intellectual and moral foundation to lead the Civil Rights Movement! The Martin Luther King Jr. International Chapel on campus honors his legacy.</p>
                    
                    <h3>Athletics - The Maroon Tigers</h3>
                    <ul>
                        <li><strong>Conference:</strong> Southern Intercollegiate Athletic Conference (SIAC) - NCAA Division II</li>
                        <li><strong>Teams:</strong> Basketball, football, baseball, tennis, track & field, cross country</li>
                        <li><strong>Championships:</strong> Multiple SIAC championships</li>
                        <li><strong>Stadium:</strong> B.T. Harvey Stadium (football)</li>
                    </ul>
                    
                    <h3>Greek Life - Divine Nine</h3>
                    <p>Morehouse is home to the five Divine Nine fraternities:</p>
                    <ul>
                        <li>Alpha Phi Alpha Fraternity, Inc.</li>
                        <li>Kappa Alpha Psi Fraternity, Inc.</li>
                        <li>Omega Psi Phi Fraternity, Inc.</li>
                        <li><strong>Phi Beta Sigma Fraternity, Inc.</strong> (founded at Howard but strong at Morehouse)</li>
                        <li>Iota Phi Theta Fraternity, Inc.</li>
                    </ul>
                    
                    <h3>Student Organizations & Media</h3>
                    <ul>
                        <li><strong>Maroon Tiger (student newspaper)</strong> - operating since 1898!</li>
                        <li><strong>Student Government Association (SGA)</strong></li>
                        <li><strong>Morehouse Business Association</strong></li>
                        <li><strong>Pre-Med/Pre-Law societies</strong></li>
                        <li><strong>Glee Club (world-famous choir)</strong></li>
                        <li><strong>Debate team</strong></li>
                    </ul>
                    
                    <h3>Legendary Morehouse Men</h3>
                    <ul>
                        <li><strong>Dr. Martin Luther King Jr. (Class of 1948):</strong> Civil rights leader, Nobel Peace Prize winner</li>
                        <li><strong>Spike Lee (Class of 1979):</strong> Oscar-winning filmmaker and director</li>
                        <li><strong>Samuel L. Jackson (Class of 1972):</strong> One of the highest-grossing actors of all time</li>
                        <li><strong>Maynard Jackson (Class of 1956):</strong> First Black mayor of Atlanta (1974-1982, 1990-1994)</li>
                        <li><strong>Dr. Louis Sullivan (Class of 1954):</strong> U.S. Secretary of Health and Human Services, founded Morehouse School of Medicine</li>
                        <li><strong>Edwin Moses (Class of 1978):</strong> Two-time Olympic gold medalist</li>
                        <li><strong>Jeh Johnson (Class of 1979):</strong> U.S. Secretary of Homeland Security (2013-2017)</li>
                        <li><strong>Shelton "Spike" Lee (Class of 1979):</strong> Director of "Do the Right Thing," "Malcolm X," "BlacKkKlansman"</li>
                        <li><strong>Donn Clendenon (Class of 1957):</strong> MLB player, World Series MVP</li>
                        <li><strong>Hundreds of doctors, lawyers, CEOs, educators, and leaders</strong></li>
                    </ul>
                    
                    <h3>Morehouse Traditions</h3>
                    <ul>
                        <li><strong>Crown Forum:</strong> Tuesday assemblies in King Chapel</li>
                        <li><strong>Founders Day:</strong> February 14th celebration</li>
                        <li><strong>Morehouse-Spelman Exchanges:</strong> Joint events, classes, and social activities</li>
                        <li><strong>Candle Lighting Ceremony:</strong> New student orientation tradition</li>
                        <li><strong>Commencement on The Quad:</strong> Graduation ceremony outdoors</li>
                    </ul>
                    
                    <h3>Morehouse-Spelman Love</h3>
                    <p>Morehouse and Spelman (the sister school) have been neighbors for over 100 years. Located right next to each other in the Atlanta University Center, students share classes, attend events together, and build lifelong connections! Many Morehouse-Spelman couples get married and raise future HBCU students!</p>
                `,
                quiz: {
                    question: "In what year did Dr. Martin Luther King Jr. graduate from Morehouse?",
                    options: [
                        "1944",
                        "1948",
                        "1952",
                        "1956"
                    ],
                    correct: 1
                }
            }
        }
    },
    ncat: {
        name: "North Carolina A&T State University",
        mascot: "Aggie (Bulldog with Blue & Gold Beanie)",
        colors: "#004684, #FFCD00",
        intro: "North Carolina A&T is the largest HBCU in the nation and a powerhouse in engineering, agriculture, and innovation. Founded in 1891 in Greensboro, NC, A&T students don't just learn - they DO!",
        locations: {
            quad: {
                title: "Aggie Pride on The Yard",
                content: `
                    <h3>Quick Facts About NC A&T</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Over 13,000 students (largest HBCU in America!)</li>
                        <li><strong>Campus Size:</strong> 600 acres in Greensboro, North Carolina</li>
                        <li><strong>Founded:</strong> March 9, 1891</li>
                        <li><strong>Colors:</strong> Blue and Gold</li>
                        <li><strong>Mascot:</strong> Aggie the Bulldog (wearing a blue and gold beanie!)</li>
                        <li><strong>Athletic Conference:</strong> Colonial Athletic Association (CAA)</li>
                        <li><strong>Newspaper:</strong> The A&T Register (student newspaper)</li>
                    </ul>
                    
                    <h3>Greatest Homecoming on Earth</h3>
                    <p>A&T's homecoming, called GHOE (Greatest Homecoming On Earth), brings over 100,000 people to Greensboro every October! The energy, the marching band, and Aggie Pride are legendary! GHOE Week includes:</p>
                    <ul>
                        <li>Step shows and talent competitions</li>
                        <li>The legendary Blue & Gold Marching Machine halftime show</li>
                        <li>Parade through downtown Greensboro</li>
                        <li>Concerts featuring major artists</li>
                        <li>Alumni reunions from around the world</li>
                    </ul>
                    
                    <h3>Founded to Serve</h3>
                    <p>NC A&T was founded in 1891 as the Agricultural and Mechanical College for the Colored Race. The "A&T" stands for Agricultural and Technical. It was created to help Black farmers and workers gain technical skills to build better lives.</p>
                    
                    <h3>The Aggie Motto</h3>
                    <p>"Deed Not Words" - A&T students don't just talk about making change, they DO IT! This motto reflects the hands-on, action-oriented spirit of every Aggie.</p>
                    
                    <h3>The Sit-In Movement - February 1, 1960</h3>
                    <p>Four A&T freshmen made history! Ezell Blair Jr., David Richmond, Franklin McCain, and Joseph McNeil sat at a whites-only lunch counter at Woolworth's in Greensboro and refused to leave until they were served. This act of courage sparked the sit-in movement that helped end segregation across America!</p>
                    <p>Today, the International Civil Rights Center & Museum stands where Woolworth's used to be, honoring the Greensboro Four and the movement they started.</p>
                `,
                quiz: {
                    question: "What does 'GHOE' stand for at NC A&T?",
                    options: [
                        "Great HBCU of Excellence",
                        "Greatest Homecoming On Earth",
                        "Greensboro's HBCU Occasion & Event",
                        "Gold and Blue Homecoming Event"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Power at A&T",
                content: `
                    <h3>The Largest HBCU</h3>
                    <ul>
                        <li><strong>Total Students:</strong> 13,487 students (Fall 2023)</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 19:1</li>
                        <li><strong>Undergraduate Programs:</strong> 50+ degree programs</li>
                        <li><strong>Graduate Programs:</strong> 38 master's programs and 11 doctoral programs</li>
                        <li><strong>Colleges:</strong> 8 colleges and schools</li>
                    </ul>
                    
                    <h3>Academic Colleges & Schools</h3>
                    <ul>
                        <li>College of Agriculture and Environmental Sciences</li>
                        <li>College of Arts, Humanities and Social Sciences</li>
                        <li>College of Business and Economics</li>
                        <li>College of Education</li>
                        <li>College of Engineering</li>
                        <li>College of Health and Human Sciences</li>
                        <li>College of Science and Technology</li>
                        <li>Graduate College</li>
                    </ul>
                    
                    <h3>Top-Ranked Programs</h3>
                    <ul>
                        <li><strong>Engineering:</strong> #1 in the nation for producing Black engineers! A&T graduates more Black engineers than any other university</li>
                        <li><strong>Agriculture:</strong> Animal science, crop science, agricultural education</li>
                        <li><strong>Business:</strong> Accounting, marketing, supply chain management, entrepreneurship</li>
                        <li><strong>STEM:</strong> Computer science, mathematics, biology, chemistry, physics</li>
                        <li><strong>Education:</strong> Teacher preparation programs</li>
                    </ul>
                    
                    <h3>Engineering Specializations</h3>
                    <p>More Black students study engineering at A&T than at almost any other university! Engineering majors include:</p>
                    <ul>
                        <li>Mechanical Engineering</li>
                        <li>Electrical Engineering</li>
                        <li>Civil Engineering</li>
                        <li>Chemical Engineering</li>
                        <li>Industrial and Systems Engineering</li>
                        <li>Computer Engineering</li>
                        <li>Aerospace Engineering</li>
                        <li>Biomedical Engineering</li>
                    </ul>
                    
                    <h3>Doctoral Programs</h3>
                    <p>A&T offers PhD programs in 11 fields - one of the few HBCUs where you can earn a doctorate! Programs include:</p>
                    <ul>
                        <li>PhD in Energy and Environmental Systems</li>
                        <li>PhD in Electrical Engineering</li>
                        <li>PhD in Mechanical Engineering</li>
                        <li>PhD in Industrial and Systems Engineering</li>
                        <li>PhD in Agricultural and Environmental Sciences</li>
                        <li>And more!</li>
                    </ul>
                    
                    <h3>F.D. Bluford Library</h3>
                    <p>Named after Dr. Ferdinand D. Bluford, A&T's longest-serving chancellor, the library houses over 340,000 books and provides 24/7 study spaces during finals!</p>
                    
                    <h3>Research Powerhouse</h3>
                    <p>A&T researchers work on cutting-edge projects funded by NASA, the National Science Foundation, Department of Defense, and major corporations. Research areas include renewable energy, cybersecurity, transportation technology, and agricultural innovation.</p>
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
                    <p>If you want to be a Black engineer, A&T is THE place! NC A&T produces more Black engineers than almost anywhere else in America!</p>
                    
                    <h3>Engineering by the Numbers</h3>
                    <ul>
                        <li><strong>Engineering Students:</strong> Over 3,000 engineering majors</li>
                        <li><strong>Engineering Graduates:</strong> A&T awards approximately 450 engineering degrees annually</li>
                        <li><strong>National Ranking:</strong> #1 nationally in undergraduate degrees awarded to African Americans in engineering</li>
                        <li><strong>Job Placement:</strong> Over 90% of engineering graduates employed or in graduate school within 6 months</li>
                    </ul>
                    
                    <h3>State-of-the-Art Facilities</h3>
                    <ul>
                        <li><strong>McNair Hall:</strong> Named after astronaut Dr. Ronald McNair, houses engineering labs and classrooms</li>
                        <li><strong>Gibbs Hall:</strong> Advanced research laboratories</li>
                        <li><strong>Cherry Hall:</strong> Computer labs and technology classrooms</li>
                        <li><strong>Joint School of Nanoscience and Nanoengineering:</strong> Students study the smallest things in science - building materials atom by atom!</li>
                    </ul>
                    
                    <h3>Research Centers</h3>
                    <ul>
                        <li><strong>Center for Advanced Materials and Smart Structures</strong></li>
                        <li><strong>NSF Engineering Research Center for Revolutionizing Metallic Biomaterials</strong></li>
                        <li><strong>Center of Excellence in Product Innovation and Advanced Manufacturing</strong></li>
                        <li><strong>Transportation Institute</strong> - Working on self-driving cars and intelligent transportation systems</li>
                    </ul>
                    
                    <h3>Famous A&T Engineers & Scientists</h3>
                    <ul>
                        <li><strong>Dr. Ronald McNair (1950-1986):</strong> NASA astronaut and physicist. Earned his physics degree from A&T in 1971, became the second African American in space. Died tragically in the Challenger explosion in 1986. McNair Hall on campus honors his legacy.</li>
                        <li><strong>Jesse Jackson:</strong> Civil rights leader, studied at A&T before becoming a national figure in politics and activism</li>
                        <li><strong>Thousands of engineers at:</strong> NASA, Boeing, Lockheed Martin, Tesla, Google, Apple, SpaceX, and engineering firms worldwide</li>
                        <li><strong>Corporate executives:</strong> Leading Fortune 500 engineering departments</li>
                        <li><strong>Entrepreneurs:</strong> Starting their own tech companies and engineering firms</li>
                    </ul>
                    
                    <h3>The Joint School of Nanoscience</h3>
                    <p>A&T partners with UNC-Greensboro to run the Joint School of Nanoscience and Nanoengineering - the first of its kind in North Carolina! Students work with technology so small you need special microscopes to see it!</p>
                    
                    <h3>Formula SAE Racing Team</h3>
                    <p>A&T students design and build actual race cars from scratch! The Formula SAE team competes against universities worldwide. They design the engine, chassis, suspension, electronics - everything! The team has won multiple national championships.</p>
                    
                    <h3>NASA Partnerships</h3>
                    <p>A&T students work directly with NASA on space technology research. A&T is part of NASA's Minority University Research and Education Program (MUREP), giving students access to NASA facilities, scientists, and projects.</p>
                    
                    <h3>Real-World Experience</h3>
                    <p>A&T engineering students don't just learn theory - they build, create, and solve real problems through:</p>
                    <ul>
                        <li>Senior design projects with real companies</li>
                        <li>Co-op programs where students work at companies for semesters</li>
                        <li>Internships at top tech and engineering companies</li>
                        <li>Research assistantships with professors</li>
                    </ul>
                `,
                quiz: {
                    question: "Which NASA astronaut graduated from NC A&T and has a building named after him?",
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
                    <h3>Student Body Quick Facts</h3>
                    <ul>
                        <li><strong>Total Enrollment:</strong> 13,487 students</li>
                        <li><strong>Undergraduate:</strong> 11,534 students</li>
                        <li><strong>Graduate:</strong> 1,953 students</li>
                        <li><strong>States Represented:</strong> Students from all 50 states</li>
                        <li><strong>International Students:</strong> From over 40 countries</li>
                        <li><strong>On-Campus Housing:</strong> 14 residence halls</li>
                    </ul>
                    
                    <h3>Aggie Pride Forever</h3>
                    <p>Once you're an Aggie, you're ALWAYS an Aggie! The pride, the spirit, and the family feeling never go away! The Aggie Network connects alumni worldwide.</p>
                    
                    <h3>The Blue & Gold Marching Machine</h3>
                    <p>A&T's marching band is one of the most famous HBCU bands in America!</p>
                    <ul>
                        <li><strong>Band Members:</strong> Over 200 students</li>
                        <li><strong>Performances:</strong> NFL halftime shows, presidential inaugurations, major events worldwide</li>
                        <li><strong>Awards:</strong> Multiple Honda Battle of the Bands championships</li>
                        <li><strong>Famous Shows:</strong> High-energy performances known across the nation</li>
                    </ul>
                    
                    <h3>Athletics - Aggie Athletics</h3>
                    <ul>
                        <li><strong>Conference:</strong> Colonial Athletic Association (CAA)</li>
                        <li><strong>Division:</strong> NCAA Division I</li>
                        <li><strong>Teams:</strong> 15 varsity sports (football, basketball, track & field, bowling, volleyball, and more)</li>
                        <li><strong>Stadium:</strong> Truist Stadium (seats 21,500 for football)</li>
                        <li><strong>Championships:</strong> Multiple conference championships and playoff appearances</li>
                        <li><strong>Colors:</strong> Blue and Gold</li>
                    </ul>
                    
                    <h3>The Aggie-Eagle Classic</h3>
                    <p>The football rivalry between A&T and North Carolina Central is legendary! Played since 1924, this is one of the longest-running Black college football rivalries. The game alternates between Greensboro and Durham.</p>
                    
                    <h3>Greek Life & Organizations</h3>
                    <p>A&T is home to ALL nine Divine Nine fraternities and sororities:</p>
                    <ul>
                        <li>Alpha Phi Alpha Fraternity, Inc.</li>
                        <li>Alpha Kappa Alpha Sorority, Inc.</li>
                        <li>Kappa Alpha Psi Fraternity, Inc.</li>
                        <li>Omega Psi Phi Fraternity, Inc.</li>
                        <li>Delta Sigma Theta Sorority, Inc.</li>
                        <li>Phi Beta Sigma Fraternity, Inc.</li>
                        <li>Zeta Phi Beta Sorority, Inc.</li>
                        <li>Sigma Gamma Rho Sorority, Inc.</li>
                        <li>Iota Phi Theta Fraternity, Inc.</li>
                    </ul>
                    
                    <h3>Student Organizations</h3>
                    <p>Over 200 student organizations including:</p>
                    <ul>
                        <li>National Society of Black Engineers (NSBE) - one of the largest chapters in the nation</li>
                        <li>Student Government Association</li>
                        <li>Campus Activities Board</li>
                        <li>Student media (The A&T Register newspaper, WNAA radio station)</li>
                        <li>Academic honor societies</li>
                        <li>Cultural organizations</li>
                        <li>Community service groups</li>
                    </ul>
                    
                    <h3>WNAA 90.1 FM</h3>
                    <p>A&T's student-run radio station has been broadcasting since 1972! Students gain real radio experience and the station reaches the entire Greensboro community.</p>
                    
                    <h3>Famous Aggies Beyond Engineering</h3>
                    <ul>
                        <li><strong>Jesse Jackson:</strong> Civil rights leader and two-time presidential candidate</li>
                        <li><strong>The Greensboro Four:</strong> Ezell Blair Jr., David Richmond, Franklin McCain, Joseph McNeil - sparked the sit-in movement</li>
                        <li><strong>Taraji P. Henson:</strong> Award-winning actress (attended A&T)</li>
                        <li><strong>Brandon Parker:</strong> NFL player for the Las Vegas Raiders</li>
                        <li><strong>Journalists, teachers, doctors, lawyers:</strong> Aggies excel in every field</li>
                    </ul>
                    
                    <h3>Homecoming - GHOE</h3>
                    <p><strong>Greatest Homecoming On Earth</strong> happens every October and includes:</p>
                    <ul>
                        <li><strong>Monday:</strong> GHOE officially begins</li>
                        <li><strong>Tuesday-Thursday:</strong> Concerts, comedy shows, step shows</li>
                        <li><strong>Friday:</strong> Pep rally and bonfire</li>
                        <li><strong>Saturday Morning:</strong> Parade through Greensboro</li>
                        <li><strong>Saturday Afternoon:</strong> Football game and legendary halftime show</li>
                        <li><strong>Saturday Night:</strong> Post-game concerts and celebrations</li>
                        <li><strong>Over 100,000 people:</strong> Attend GHOE events throughout the week</li>
                    </ul>
                `,
                quiz: {
                    question: "What are NC A&T's school colors?",
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
        mascot: "Rattler",
        colors: "#FF6B35, #00563B",
        intro: "Florida A&M University (FAMU) is a public HBCU in Tallahassee, Florida, known for its excellence in journalism, pharmacy, engineering, and its world-famous marching band! Founded in 1887, FAMU's motto is 'Excellence with Caring.'",
        locations: {
            quad: {
                title: "The FAMU Campus - The Hill",
                content: `
                    <h3>Quick Facts About FAMU</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Over 9,600 students</li>
                        <li><strong>Campus Size:</strong> 419 acres in Tallahassee, Florida</li>
                        <li><strong>Founded:</strong> October 3, 1887</li>
                        <li><strong>Colors:</strong> Orange and Green</li>
                        <li><strong>Mascot:</strong> Rattler (Rattlesnake)</li>
                        <li><strong>Athletic Conference:</strong> Southwestern Athletic Conference (SWAC)</li>
                        <li><strong>Type:</strong> Public university</li>
                    </ul>
                    
                    <h3>Highest of Seven Hills</h3>
                    <p>FAMU sits on the highest of Tallahassee's seven hills, overlooking Florida's capital city. The campus is called "The Hill" and offers beautiful views of the city. The location puts FAMU right in the heart of Florida politics and government!</p>
                    
                    <h3>Founded for Excellence</h3>
                    <p>Florida A&M University was founded on October 3, 1887, as the State Normal College for Colored Students. It was created to train Black teachers to educate Black children in Florida. The school has grown from 15 students to over 9,600 students from all 50 states and 70+ countries!</p>
                    
                    <h3>The Rattler Spirit</h3>
                    <p>FAMU students are called Rattlers after the Florida rattlesnake. The rattler is:</p>
                    <ul>
                        <li><strong>Fierce:</strong> Don't mess with a Rattler!</li>
                        <li><strong>Focused:</strong> Rattlers know what they want and go after it</li>
                        <li><strong>Unstoppable:</strong> When challenged, Rattlers strike!</li>
                        <li><strong>Proud:</strong> Rattler Pride runs deep</li>
                    </ul>
                    
                    <h3>The FAMU Motto</h3>
                    <p>"Excellence with Caring" - FAMU believes in being the best at what you do while also caring for your community and lifting others up! This means academic excellence PLUS compassion and service.</p>
                    
                    <h3>Historic Campus Landmarks</h3>
                    <ul>
                        <li><strong>Lee Hall:</strong> Historic dormitory and landmark</li>
                        <li><strong>Foote-Hilyer Administration Center:</strong> Main administration building</li>
                        <li><strong>The Set (Coleman Memorial Library):</strong> Where students hang out</li>
                        <li><strong>Bragg Memorial Stadium:</strong> Football stadium (25,000 capacity)</li>
                    </ul>
                `,
                quiz: {
                    question: "What year was FAMU founded?",
                    options: [
                        "1865",
                        "1887",
                        "1900",
                        "1920"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Excellence at FAMU",
                content: `
                    <h3>Academic Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> Over 9,600</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 14:1</li>
                        <li><strong>Academic Programs:</strong> 100+ degree programs</li>
                        <li><strong>Graduate Programs:</strong> 56 master's and 12 doctoral programs</li>
                        <li><strong>Research Funding:</strong> Over $58 million annually</li>
                    </ul>
                    
                    <h3>A University of Distinction</h3>
                    <p>FAMU is nationally ranked and internationally respected for producing graduates who excel in every field! FAMU is classified as a "High Research Activity" (R2) institution.</p>
                    
                    <h3>Schools & Colleges</h3>
                    <ul>
                        <li>College of Agriculture and Food Sciences</li>
                        <li>FAMU-FSU College of Engineering</li>
                        <li>College of Education</li>
                        <li>College of Pharmacy and Pharmaceutical Sciences</li>
                        <li>College of Science and Technology</li>
                        <li>College of Social Sciences, Arts and Humanities</li>
                        <li>School of Allied Health Sciences</li>
                        <li>School of Architecture and Engineering Technology</li>
                        <li>School of Business and Industry</li>
                        <li>School of Journalism and Graphic Communication</li>
                        <li>School of Nursing</li>
                        <li>School of the Environment</li>
                    </ul>
                    
                    <h3>Top-Ranked Programs</h3>
                    <ul>
                        <li><strong>Pharmacy:</strong> FAMU's College of Pharmacy is one of the best in the nation! Consistently ranked in the top tier. FAMU produces more Black pharmacists than any other school.</li>
                        <li><strong>Journalism & Graphic Communication:</strong> Award-winning program producing journalists, news anchors, TV producers, and media professionals</li>
                        <li><strong>Engineering (FAMU-FSU Joint College):</strong> Chemical, civil, electrical, industrial, mechanical engineering</li>
                        <li><strong>Business:</strong> AACSB-accredited School of Business</li>
                        <li><strong>Architecture:</strong> One of only a few HBCUs with NAAB-accredited architecture program</li>
                        <li><strong>Nursing:</strong> Preparing healthcare professionals</li>
                        <li><strong>Agriculture:</strong> Historically strong in agricultural sciences</li>
                    </ul>
                    
                    <h3>Research Centers & Institutes</h3>
                    <ul>
                        <li>Center for Plasma Science and Technology</li>
                        <li>Environmental Sciences Institute</li>
                        <li>Center for Viticulture and Small Fruit Research</li>
                        <li>Institute of Public Health</li>
                    </ul>
                    
                    <h3>Coleman Memorial Library</h3>
                    <p>The main library holds over 600,000 volumes and provides 24/7 study spaces. "The Set" in front of Coleman Library is the social hub of campus where students gather!</p>
                    
                    <h3>Study Abroad</h3>
                    <p>FAMU students study in countries around the world including Brazil, China, South Africa, Spain, and more, bringing Rattler excellence everywhere they go!</p>
                `,
                quiz: {
                    question: "How many doctoral programs does FAMU offer?",
                    options: [
                        "5",
                        "8",
                        "12",
                        "20"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "FAMU STEM Innovation",
                content: `
                    <h3>Science & Technology Leaders</h3>
                    <p>FAMU produces scientists, engineers, pharmacists, and researchers who are changing the world!</p>
                    
                    <h3>STEM Quick Facts</h3>
                    <ul>
                        <li><strong>Pharmacy:</strong> #1 producer of Black pharmacists in America</li>
                        <li><strong>Engineering Graduates:</strong> Hundreds of engineers graduate annually through FAM-FSU program</li>
                        <li><strong>Research Funding:</strong> Over $58 million annually in research grants</li>
                        <li><strong>NASA Partnership:</strong> FAMU is a NASA University Partner</li>
                    </ul>
                    
                    <h3>College of Pharmacy & Pharmaceutical Sciences</h3>
                    <p>FAMU's pharmacy program is legendary! Established in 1951, it has graduated over 4,000 pharmacists - more Black pharmacists than any other school in America! The program consistently ranks in the top tier nationally.</p>
                    
                    <h3>FAMU-FSU College of Engineering</h3>
                    <p>This joint program with Florida State University is one of the most successful partnerships in higher education! FAMU students can study:</p>
                    <ul>
                        <li>Chemical & Biomedical Engineering</li>
                        <li>Civil & Environmental Engineering</li>
                        <li>Electrical & Computer Engineering</li>
                        <li>Industrial & Manufacturing Engineering</li>
                        <li>Mechanical Engineering</li>
                    </ul>
                    
                    <h3>Famous FAMU STEM Alumni</h3>
                    <ul>
                        <li><strong>Thousands of pharmacists:</strong> FAMU graduates fill prescriptions and provide healthcare in communities nationwide</li>
                        <li><strong>Engineers at NASA, Boeing, Lockheed Martin:</strong> Designing spacecraft, aircraft, and defense systems</li>
                        <li><strong>Pharmaceutical executives:</strong> Leading major healthcare and pharmaceutical companies</li>
                        <li><strong>Medical researchers:</strong> Conducting groundbreaking research in health, environment, and technology</li>
                        <li><strong>Tech entrepreneurs:</strong> Starting companies in Silicon Valley and beyond</li>
                    </ul>
                    
                    <h3>Research Centers</h3>
                    <ul>
                        <li><strong>Center for Plasma Science and Technology:</strong> Advanced physics research</li>
                        <li><strong>Environmental Sciences Institute:</strong> Climate and environmental research</li>
                        <li><strong>Center for Water Quality:</strong> Water safety and treatment research</li>
                        <li><strong>High-Performance Materials Institute:</strong> Materials science</li>
                    </ul>
                    
                    <h3>Student Research Opportunities</h3>
                    <p>FAMU students conduct research as undergraduates through:</p>
                    <ul>
                        <li>FAMU RISE (Research Initiative for Scientific Enhancement)</li>
                        <li>Summer research internships</li>
                        <li>Faculty-mentored research projects</li>
                        <li>Presentations at national conferences</li>
                    </ul>
                `,
                quiz: {
                    question: "What does FAMU produce more of than any other school?",
                    options: [
                        "Doctors",
                        "Black pharmacists",
                        "Lawyers",
                        "Teachers"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "The FAMU Experience - Rattler Pride",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> Over 9,600</li>
                        <li><strong>States Represented:</strong> All 50 states</li>
                        <li><strong>International Students:</strong> From 70+ countries</li>
                        <li><strong>On-Campus Housing:</strong> 14 residence halls</li>
                        <li><strong>Student Organizations:</strong> 200+ clubs and organizations</li>
                    </ul>
                    
                    <h3>The Marching 100 - "The Best Band in the Land"</h3>
                    <p>FAMU's Marching 100 is THE most famous HBCU marching band in the world! Founded in 1946, they've performed at:</p>
                    <ul>
                        <li><strong>Super Bowls:</strong> Multiple NFL championship halftime shows</li>
                        <li><strong>Presidential Inaugurations:</strong> Including President Obama's inauguration</li>
                        <li><strong>Parades:</strong> Macy's Thanksgiving Day Parade, Rose Parade</li>
                        <li><strong>Major Events:</strong> World's fairs, international festivals</li>
                        <li><strong>Movies & TV:</strong> Appeared in films and documentaries</li>
                        <li><strong>International Tours:</strong> Performed in Europe, Asia, and beyond</li>
                    </ul>
                    <p>The band has over 420 members and is known for high-energy performances, precision, and the "Marching 100 Sound"!</p>
                    
                    <h3>Athletics - The Rattlers</h3>
                    <ul>
                        <li><strong>Conference:</strong> Southwestern Athletic Conference (SWAC) - NCAA Division I</li>
                        <li><strong>Football:</strong> SWAC Champions multiple times, FCS Playoffs appearances</li>
                        <li><strong>Stadium:</strong> Bragg Memorial Stadium (25,000 capacity)</li>
                        <li><strong>Teams:</strong> Football, basketball, track & field, bowling, softball, tennis, volleyball, swimming</li>
                        <li><strong>Rivalries:</strong> Florida Classic vs. Bethune-Cookman (largest HBCU football game, 60,000+ fans!)</li>
                    </ul>
                    
                    <h3>The Florida Classic</h3>
                    <p>Every year, FAMU plays Bethune-Cookman in Orlando's Camping World Stadium. Over 60,000 fans attend - it's the largest HBCU football game in America! The halftime battle between bands is LEGENDARY.</p>
                    
                    <h3>FAMU Homecoming</h3>
                    <p>FAMU's homecoming brings tens of thousands of alumni back to Tallahassee! The week includes:</p>
                    <ul>
                        <li>Coronation of Mr. & Miss FAMU</li>
                        <li>Step shows and talent shows</li>
                        <li>The Homecoming Parade</li>
                        <li>Football game and Marching 100 halftime show</li>
                        <li>Concerts featuring major artists</li>
                    </ul>
                    
                    <h3>Greek Life - Divine Nine</h3>
                    <p>FAMU is home to all nine Divine Nine organizations:</p>
                    <ul>
                        <li>Alpha Phi Alpha Fraternity, Inc.</li>
                        <li>Alpha Kappa Alpha Sorority, Inc.</li>
                        <li>Kappa Alpha Psi Fraternity, Inc.</li>
                        <li>Omega Psi Phi Fraternity, Inc.</li>
                        <li>Delta Sigma Theta Sorority, Inc.</li>
                        <li>Phi Beta Sigma Fraternity, Inc.</li>
                        <li>Zeta Phi Beta Sorority, Inc.</li>
                        <li>Sigma Gamma Rho Sorority, Inc.</li>
                        <li>Iota Phi Theta Fraternity, Inc.</li>
                    </ul>
                    
                    <h3>Student Organizations & Media</h3>
                    <ul>
                        <li><strong>The FAMUan (student newspaper)</strong></li>
                        <li><strong>WANM 90.5 FM (student radio station)</strong></li>
                        <li><strong>Student Government Association</strong></li>
                        <li><strong>FAMU National Alumni Association</strong></li>
                    </ul>
                    
                    <h3>Famous Rattlers</h3>
                    <ul>
                        <li><strong>Althea Gibson (1927-2003):</strong> First Black athlete to win Wimbledon and U.S. Open tennis championships. Broke the color barrier in tennis.</li>
                        <li><strong>Keisha Lance Bottoms:</strong> Former Mayor of Atlanta (2018-2022), political leader and CNN commentator</li>
                        <li><strong>Congresswoman Carrie Meek (1926-2021):</strong> Served in the U.S. House of Representatives</li>
                        <li><strong>Velesha P. Williams:</strong> NASA engineer</li>
                        <li><strong>Thousands of pharmacists, educators, healthcare leaders:</strong> Serving communities nationwide</li>
                    </ul>
                    
                    <h3>The FAMU-ily</h3>
                    <p>Rattlers call themselves "The FAMU-ily" because the bond between students, alumni, and supporters is like family. Once a Rattler, always a Rattler!</p>
                `,
                quiz: {
                    question: "What is FAMU's annual rivalry football game called?",
                    options: [
                        "The Orange and Green Game",
                        "The Florida Classic",
                        "The Rattler Bowl",
                        "The Capital City Showdown"
                    ],
                    correct: 1
                }
            }
        }
    },
    cau: {
        name: "Clark Atlanta University",
        mascot: "Panther",
        colors: "#E31837, #000000",
        intro: "Clark Atlanta University, formed in 1988 from the merger of Clark College and Atlanta University, is a hub of academic excellence in the heart of Atlanta. CAU produces business leaders, artists, and change-makers!",
        locations: {
            quad: {
                title: "CAU Campus - The Atlanta University Center",
                content: `
                    <h3>Quick Facts About Clark Atlanta University</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Approximately 4,000 students</li>
                        <li><strong>Campus Size:</strong> 126 acres in Atlanta, Georgia</li>
                        <li><strong>Founded:</strong> 1988 (merger), heritage from 1865 and 1869</li>
                        <li><strong>Colors:</strong> Red and Black</li>
                        <li><strong>Mascot:</strong> Panther (🐾)</li>
                        <li><strong>Athletic Conference:</strong> Southern Intercollegiate Athletic Conference (SIAC)</li>
                        <li><strong>Type:</strong> Private university</li>
                    </ul>
                    
                    <h3>The Heart of the Atlanta University Center</h3>
                    <p>Clark Atlanta University is located in the Atlanta University Center (AUC), the largest consortium of HBCUs in the nation! CAU shares this historic neighborhood with Spelman College, Morehouse College, and Morehouse School of Medicine. Students can take classes across all AUC schools!</p>
                    
                    <h3>Two Historic Schools Become One</h3>
                    <p>In 1988, Clark College (founded in 1869) and Atlanta University (founded in 1865 - the first graduate institution for African Americans) merged to create Clark Atlanta University. This brought together over 250 years of combined excellence!</p>
                    <ul>
                        <li><strong>Atlanta University (1865):</strong> First graduate institution to serve African Americans, founded right after the Civil War</li>
                        <li><strong>Clark College (1869):</strong> Originally founded by the Freedmen's Aid Society of the Methodist Episcopal Church</li>
                        <li><strong>Merger (1988):</strong> Combined to create CAU, maintaining both legacies</li>
                    </ul>
                    
                    <h3>The CAU Motto</h3>
                    <p>"Culture for Service" - CAU believes education should prepare students to serve and uplift their communities! This reflects CAU's commitment to producing graduates who give back.</p>
                    
                    <h3>Panther Pride</h3>
                    <p>CAU students are Panthers - fierce, focused, and unstoppable! When Panthers graduate, they take their excellence everywhere they go! The Panther represents strength, intelligence, and grace.</p>
                    
                    <h3>Historic Significance</h3>
                    <ul>
                        <li>Home of the first Black studies program at an HBCU (1969)</li>
                        <li>W.E.B. Du Bois taught at Atlanta University and founded the Atlanta University Studies of the Negro Problem</li>
                        <li>Historic campus with buildings dating back over 100 years</li>
                    </ul>
                `,
                quiz: {
                    question: "What year was Clark Atlanta University formed through a merger?",
                    options: [
                        "1865",
                        "1969",
                        "1988",
                        "2000"
                    ],
                    correct: 2
                }
            },
            library: {
                title: "Academic Excellence at CAU",
                content: `
                    <h3>Academic Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~4,000</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 18:1</li>
                        <li><strong>Degree Programs:</strong> 50+ undergraduate and graduate programs</li>
                        <li><strong>Doctoral Programs:</strong> PhDs in multiple fields</li>
                        <li><strong>Research Classification:</strong> R2 (High Research Activity)</li>
                    </ul>
                    
                    <h3>Schools & Colleges</h3>
                    <ul>
                        <li>School of Arts and Sciences</li>
                        <li>School of Business Administration</li>
                        <li>School of Education</li>
                        <li>Whitney M. Young Jr. School of Social Work</li>
                        <li>Graduate Studies programs</li>
                    </ul>
                    
                    <h3>Top Academic Programs</h3>
                    <ul>
                        <li><strong>Business Administration:</strong> Marketing, management, accounting, finance - CAU's AACSB-accredited business school produces entrepreneurs and Fortune 500 executives</li>
                        <li><strong>Mass Media Arts:</strong> Radio, TV, film production - training the next generation of Black media professionals</li>
                        <li><strong>Social Work:</strong> One of the top social work programs, named after Whitney M. Young Jr., civil rights leader</li>
                        <li><strong>Biology:</strong> Pre-med and research science pathways</li>
                        <li><strong>Chemistry:</strong> Nationally recognized research program</li>
                        <li><strong>Computer Science:</strong> Software development and IT</li>
                        <li><strong>Criminal Justice:</strong> Law enforcement and legal pathways</li>
                        <li><strong>Psychology:</strong> Mental health and counseling programs</li>
                        <li><strong>Political Science:</strong> Training future leaders and policy makers</li>
                    </ul>
                    
                    <h3>Graduate & Doctoral Programs</h3>
                    <p>CAU offers PhD programs in:</p>
                    <ul>
                        <li>African American Studies</li>
                        <li>Biology</li>
                        <li>Chemistry</li>
                        <li>Computer Science</li>
                        <li>Educational Leadership</li>
                    </ul>
                    
                    <h3>Robert W. Woodruff Library</h3>
                    <p>CAU students have access to the Woodruff Library - shared with the entire Atlanta University Center! This research library holds millions of volumes and special collections on African American history and culture.</p>
                    
                    <h3>The AUC Consortium Advantage</h3>
                    <p>CAU students can cross-register for classes at Spelman, Morehouse, and Morehouse School of Medicine, giving them access to even more programs and resources!</p>
                `,
                quiz: {
                    question: "How many schools make up the Atlanta University Center consortium?",
                    options: [
                        "2",
                        "3",
                        "4",
                        "5"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "CAU STEM Excellence",
                content: `
                    <h3>Science & Research Powerhouse</h3>
                    <p>Clark Atlanta has a strong tradition in STEM fields, producing scientists, researchers, and healthcare professionals!</p>
                    
                    <h3>STEM Quick Facts</h3>
                    <ul>
                        <li><strong>Research Funding:</strong> Over $10 million annually in STEM research grants</li>
                        <li><strong>PhD Programs:</strong> Biology, Chemistry, Computer Science</li>
                        <li><strong>NASA Partnership:</strong> CAU Center for Theoretical Studies of Physical Systems partners with NASA</li>
                        <li><strong>Pre-Health Pathway:</strong> Strong pipeline to medical and pharmacy schools</li>
                    </ul>
                    
                    <h3>STEM Programs</h3>
                    <ul>
                        <li><strong>Chemistry:</strong> CAU's chemistry program is nationally recognized for research excellence</li>
                        <li><strong>Biology:</strong> Pre-med, pre-dental, research biology</li>
                        <li><strong>Computer Science:</strong> Software engineering, cybersecurity, data science</li>
                        <li><strong>Mathematics:</strong> Pure and applied mathematics, actuarial science</li>
                        <li><strong>Physics:</strong> Research and theoretical physics</li>
                        <li><strong>Environmental Science:</strong> Sustainability and ecology studies</li>
                    </ul>
                    
                    <h3>Research Centers & Initiatives</h3>
                    <ul>
                        <li><strong>Center for Theoretical Studies of Physical Systems:</strong> NASA-funded research center</li>
                        <li><strong>Center for Cancer Research and Therapeutic Development:</strong> Groundbreaking cancer research</li>
                        <li><strong>Environmental Research:</strong> Water quality and environmental justice studies</li>
                        <li><strong>Undergraduate Research:</strong> Students work alongside professors on real research projects</li>
                    </ul>
                    
                    <h3>CAU STEM Alumni</h3>
                    <ul>
                        <li><strong>NASA Scientists & Engineers:</strong> CAU graduates work at NASA facilities nationwide</li>
                        <li><strong>Pharmaceutical Researchers:</strong> Working at major drug companies developing new medicines</li>
                        <li><strong>Doctors & Healthcare Professionals:</strong> Practicing medicine and conducting medical research</li>
                        <li><strong>Tech Industry Leaders:</strong> Software engineers at Google, Microsoft, Amazon, and tech startups</li>
                        <li><strong>Environmental Scientists:</strong> Working for EPA, NOAA, and environmental organizations</li>
                    </ul>
                    
                    <h3>Pre-Health Programs</h3>
                    <p>CAU has strong partnerships with medical schools including Morehouse School of Medicine (right in the AUC!), helping students pursue careers as doctors, dentists, and pharmacists.</p>
                `,
                quiz: {
                    question: "Which space agency does CAU's Center for Theoretical Studies partner with?",
                    options: [
                        "European Space Agency",
                        "NASA",
                        "SpaceX",
                        "Blue Origin"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Life as a Panther",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~4,000</li>
                        <li><strong>States Represented:</strong> 40+ states</li>
                        <li><strong>On-Campus Housing:</strong> Multiple residence halls</li>
                        <li><strong>Student Organizations:</strong> 100+ clubs and organizations</li>
                    </ul>
                    
                    <h3>Panther Pride</h3>
                    <p>CAU students carry themselves with confidence, excellence, and purpose. Once a Panther, always a Panther! The CAU community is tight-knit and supportive.</p>
                    
                    <h3>The AUC Connection</h3>
                    <p>Being part of the Atlanta University Center means CAU students can:</p>
                    <ul>
                        <li>Take classes at Spelman, Morehouse, and Morehouse School of Medicine</li>
                        <li>Attend social events across all AUC campuses</li>
                        <li>Use the Robert W. Woodruff Library (shared resource)</li>
                        <li>Join organizations with students from all AUC schools</li>
                        <li>Network with thousands of HBCU students in one area</li>
                    </ul>
                    
                    <h3>Athletics - CAU Panthers</h3>
                    <ul>
                        <li><strong>Conference:</strong> Southern Intercollegiate Athletic Conference (SIAC) - NCAA Division II</li>
                        <li><strong>Teams:</strong> Basketball, track & field, cross country, volleyball, softball</li>
                        <li><strong>Championships:</strong> Multiple SIAC championships</li>
                    </ul>
                    
                    <h3>Greek Life - Divine Nine</h3>
                    <p>CAU is home to all nine historically Black fraternities and sororities (the Divine Nine):</p>
                    <ul>
                        <li>Alpha Phi Alpha Fraternity, Inc.</li>
                        <li>Alpha Kappa Alpha Sorority, Inc.</li>
                        <li>Kappa Alpha Psi Fraternity, Inc.</li>
                        <li>Omega Psi Phi Fraternity, Inc.</li>
                        <li>Delta Sigma Theta Sorority, Inc.</li>
                        <li>Phi Beta Sigma Fraternity, Inc.</li>
                        <li>Zeta Phi Beta Sorority, Inc.</li>
                        <li>Sigma Gamma Rho Sorority, Inc.</li>
                        <li>Iota Phi Theta Fraternity, Inc.</li>
                    </ul>
                    
                    <h3>Famous Panthers</h3>
                    <ul>
                        <li><strong>Kenny Leon (Class of 1981):</strong> Tony Award-winning Broadway director who directed "A Raisin in the Sun" on Broadway and "Fences" film</li>
                        <li><strong>Jacque Reid:</strong> National TV journalist, host of "The Daily Drum" and correspondent for major networks</li>
                        <li><strong>James Weldon Johnson (Atlanta University, 1894):</strong> Writer, diplomat, and civil rights activist who wrote "Lift Every Voice and Sing" - known as the Black National Anthem</li>
                        <li><strong>W.E.B. Du Bois:</strong> Taught at Atlanta University, founded sociology department, wrote "The Souls of Black Folk"</li>
                        <li><strong>Numerous business executives and entrepreneurs:</strong> Leading companies across industries</li>
                    </ul>
                    
                    <h3>Student Organizations</h3>
                    <ul>
                        <li>Student Government Association</li>
                        <li>Campus Activities Board</li>
                        <li>Pre-professional clubs (Pre-Med, Pre-Law, Business clubs)</li>
                        <li>Cultural organizations</li>
                        <li>Service organizations</li>
                    </ul>
                    
                    <h3>Atlanta Advantage</h3>
                    <p>Being in Atlanta means CAU students have access to:</p>
                    <ul>
                        <li>Internships at Fortune 500 companies (Coca-Cola, Delta, Home Depot, UPS)</li>
                        <li>Film and TV industry opportunities (Atlanta is the "Hollywood of the South")</li>
                        <li>Music industry connections</li>
                        <li>Rich Black cultural history and vibrant Black community</li>
                        <li>Major events, concerts, and networking opportunities</li>
                    </ul>
                `,
                quiz: {
                    question: "Who wrote 'Lift Every Voice and Sing' (the Black National Anthem)?",
                    options: [
                        "W.E.B. Du Bois",
                        "Kenny Leon",
                        "James Weldon Johnson",
                        "Jacque Reid"
                    ],
                    correct: 2
                }
            }
        }
    },
    morrisBrown: {
        name: "Morris Brown College",
        mascot: "Wolverine",
        colors: "#660099, #FFD700",
        intro: "Morris Brown College, founded in 1881, is a historic HBCU in Atlanta rising again with strength and determination. The Purple Wolverines represent resilience, community, and the power of never giving up!",
        locations: {
            quad: {
                title: "The Morris Brown Legacy",
                content: `
                    <h3>Quick Facts About Morris Brown College</h3>
                    <ul>
                        <li><strong>Current Enrollment:</strong> Approximately 50-100 students (rebuilding phase)</li>
                        <li><strong>Campus Size:</strong> 11 acres in Atlanta, Georgia</li>
                        <li><strong>Founded:</strong> January 5, 1881</li>
                        <li><strong>Colors:</strong> Purple and Gold</li>
                        <li><strong>Mascot:</strong> Wolverine (🦡)</li>
                        <li><strong>Church Affiliation:</strong> African Methodist Episcopal (AME) Church</li>
                        <li><strong>Type:</strong> Private liberal arts college</li>
                    </ul>
                    
                    <h3>A College Built by the Community - By Us, For Us</h3>
                    <p>Morris Brown College is SPECIAL because it was founded by Black people, for Black people! On January 5, 1881, members of the African Methodist Episcopal (AME) Church created Morris Brown to educate their children. It's named after Morris Brown, the second AME bishop.</p>
                    <p>Morris Brown was the FIRST educational institution in Georgia to be owned and operated entirely by African Americans!</p>
                    
                    <h3>The Historic Peak</h3>
                    <p>At its height in the 1990s, Morris Brown had over 2,500 students and was one of the most vibrant HBCUs in America! The campus was electric with student life, Greek life, and the legendary marching band.</p>
                    
                    <h3>The Comeback Story - Resilience & Revival</h3>
                    <p>Morris Brown faced hard times in the early 2000s (financial difficulties and lost accreditation in 2002). But Morris Brown is now RISING AGAIN! The college reopened in 2020 and is being rebuilt by alumni, students, and supporters who believe in its mission. This is a real-life lesson in resilience and never giving up!</p>
                    <ul>
                        <li><strong>2002:</strong> Lost accreditation</li>
                        <li><strong>2003:</strong> Ceased operations</li>
                        <li><strong>2020:</strong> REOPENED with new leadership!</li>
                        <li><strong>2022:</strong> Regained candidacy for accreditation</li>
                        <li><strong>Today:</strong> Actively enrolling students and rebuilding programs</li>
                    </ul>
                    
                    <h3>The Morris Brown Motto</h3>
                    <p>"Enter to Learn, Depart to Serve" - Morris Brown students learn so they can serve and uplift their communities!</p>
                    
                    <h3>Wolverine Strength</h3>
                    <p>The Wolverine is small but MIGHTY - just like Morris Brown! Wolverines are fierce, determined, and never back down from a challenge. Perfect symbol for a college that refused to die!</p>
                `,
                quiz: {
                    question: "What year was Morris Brown College founded?",
                    options: [
                        "1865",
                        "1881",
                        "1900",
                        "2020"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Education & Rebuilding",
                content: `
                    <h3>Small Classes, Big Impact</h3>
                    <p>Morris Brown offers personal attention and close relationships between students and professors. Everyone knows your name!</p>
                    
                    <h3>Programs</h3>
                    <ul>
                        <li><strong>Liberal Arts:</strong> Students study history, English, psychology, and more</li>
                        <li><strong>Business:</strong> Learning to become entrepreneurs and business leaders</li>
                        <li><strong>Organizational Leadership:</strong> Training the next generation of community leaders</li>
                    </ul>
                    
                    <h3>The Revival</h3>
                    <p>Morris Brown is rebuilding its programs and facilities with the help of dedicated alumni and supporters. Students today are part of a historic revival!</p>
                    
                    <h3>Community Connection</h3>
                    <p>Morris Brown has always been deeply connected to the Atlanta community, working to improve neighborhoods and support families!</p>
                `,
                quiz: {
                    question: "What church denomination founded Morris Brown College?",
                    options: [
                        "Baptist",
                        "Methodist",
                        "African Methodist Episcopal",
                        "Presbyterian"
                    ],
                    correct: 2
                }
            },
            stem: {
                title: "Innovation & Resilience",
                content: `
                    <h3>STEM at Morris Brown</h3>
                    <p>While rebuilding, Morris Brown is developing programs in science, technology, and mathematics to prepare students for future careers!</p>
                    
                    <h3>Historic Contributions</h3>
                    <ul>
                        <li><strong>Educators:</strong> Morris Brown has produced thousands of teachers who educated Black children across the South</li>
                        <li><strong>Scientists and researchers:</strong> Alumni who went on to graduate programs and research careers</li>
                        <li><strong>Community builders:</strong> Using education to strengthen neighborhoods</li>
                    </ul>
                    
                    <h3>Future Focus</h3>
                    <p>Morris Brown is planning new STEM programs and partnerships to prepare students for careers in technology and science!</p>
                    
                    <h3>The Wolverine Way</h3>
                    <p>Just like the wolverine animal, Morris Brown students are resourceful, persistent, and always find a way to succeed!</p>
                `,
                quiz: {
                    question: "What is Morris Brown's mascot?",
                    options: [
                        "The Bears",
                        "The Wolverines",
                        "The Badgers",
                        "The Wolves"
                    ],
                    correct: 1
                }
            },
            "student-center": {
                title: "Purple Wolverine Pride",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Current Enrollment:</strong> 50-100 students (rebuilding phase)</li>
                        <li><strong>Peak Enrollment:</strong> Over 2,500 students (1990s)</li>
                        <li><strong>Campus Location:</strong> Atlanta University Center area</li>
                        <li><strong>Status:</strong> Actively rebuilding and recruiting!</li>
                    </ul>
                    
                    <h3>Part of History - The Comeback Generation</h3>
                    <p>Morris Brown students TODAY are part of a COMEBACK STORY! They're helping rebuild a historic institution and proving that HBCUs never die - they RISE AGAIN! Every current student is a pioneer in Morris Brown's revival.</p>
                    
                    <h3>The Famous Marching Wolverines Band</h3>
                    <p>The Morris Brown College Marching Wolverines were LEGENDARY! The band:</p>
                    <ul>
                        <li>Appeared in the hit movie <strong>"Drumline" (2002)</strong> starring Nick Cannon</li>
                        <li>Performed at NFL games, major parades, and events nationwide</li>
                        <li>Known for high-energy performances and creative formations</li>
                        <li>Competed in the Honda Battle of the Bands</li>
                        <li>Is being REBUILT as part of the college's revival!</li>
                    </ul>
                    
                    <h3>Greek Life Revival</h3>
                    <p>The Divine Nine fraternities and sororities that were once strong at Morris Brown are returning to campus as the college rebuilds! Greek life was a huge part of Morris Brown culture.</p>
                    
                    <h3>Famous Wolverines - Civil Rights Leaders</h3>
                    <ul>
                        <li><strong>Hosea Williams (1926-2000):</strong> Civil rights leader who worked directly with Dr. Martin Luther King Jr. Helped organize the Selma to Montgomery marches. Founded Hosea Feed the Hungry.</li>
                        <li><strong>JoAnn Robinson (1912-1992):</strong> Activist who helped organize the Montgomery Bus Boycott. English professor and women's rights advocate.</li>
                        <li><strong>Fred Gray (born 1930):</strong> Civil rights attorney who represented Rosa Parks and Martin Luther King Jr. First Black member of Alabama legislature since Reconstruction.</li>
                        <li><strong>Thousands of teachers and educators:</strong> Who taught generations of Black children across the South</li>
                        <li><strong>Community leaders:</strong> Pastors, activists, and organizers who fought for justice</li>
                    </ul>
                    
                    <h3>The Wolverine Legacy</h3>
                    <p>From 1881 to today, Morris Brown graduates have been:</p>
                    <ul>
                        <li>Teachers educating Black children when few others would</li>
                        <li>Preachers building Black churches and communities</li>
                        <li>Civil rights activists fighting segregation</li>
                        <li>Business owners building Black economic power</li>
                        <li>Leaders serving their communities with dedication</li>
                    </ul>
                    
                    <h3>The Comeback Message</h3>
                    <p>Morris Brown teaches the most important lesson: setbacks don't define you - HOW YOU BOUNCE BACK DOES! This is a lesson every student can carry for life. Never give up. Always rise again!</p>
                `,
                quiz: {
                    question: "In which 2002 movie did the Morris Brown marching band appear?",
                    options: [
                        "Stomp the Yard",
                        "Drumline",
                        "School Daze",
                        "ATL"
                    ],
                    correct: 1
                }
            }
        }
    },
    alabamaState: {
        name: "Alabama State University",
        mascot: "Hornet",
        colors: "#000000, #D4AF37",
        intro: "Alabama State University, founded in 1867 in Montgomery, Alabama, is where history was made during the Civil Rights Movement. The Mighty Hornets are known for excellence in education, marching bands, and producing leaders!",
        locations: {
            quad: {
                title: "The ASU Campus - The Hornet Nation",
                content: `
                    <h3>Quick Facts About Alabama State University</h3>
                    <ul>
                        <li><strong>Enrollment:</strong> Approximately 4,700 students</li>
                        <li><strong>Campus Size:</strong> 172 acres in Montgomery, Alabama</li>
                        <li><strong>Founded:</strong> February 1, 1867</li>
                        <li><strong>Colors:</strong> Black and Gold</li>
                        <li><strong>Mascot:</strong> Hornet (🐝)</li>
                        <li><strong>Athletic Conference:</strong> Southwestern Athletic Conference (SWAC)</li>
                        <li><strong>Type:</strong> Public university</li>
                    </ul>
                    
                    <h3>The Heart of Montgomery - The Cradle of the Confederacy and Birthplace of Civil Rights</h3>
                    <p>Alabama State sits in Montgomery, Alabama's capital city. Montgomery was the capital of the Confederacy during the Civil War, but later became the center of the Civil Rights Movement. ASU students were RIGHT THERE making history!</p>
                    
                    <h3>Founded to Educate Freed People</h3>
                    <p>Alabama State was founded on February 1, 1867 (just after the Civil War) as the Lincoln Normal School to educate formerly enslaved people. It started as a school to train Black teachers who would educate Black children across Alabama. The school has changed names several times:</p>
                    <ul>
                        <li><strong>1867:</strong> Lincoln Normal School</li>
                        <li><strong>1878:</strong> State Normal School and University</li>
                        <li><strong>1954:</strong> Alabama State College</li>
                        <li><strong>1969:</strong> Alabama State University</li>
                    </ul>
                    
                    <h3>The Hornet Spirit - Together We Sting!</h3>
                    <p>Hornets are small but POWERFUL - when they work together, nothing can stop them! ASU students are the Mighty Hornets, working together to achieve greatness! One hornet is fierce, but thousands together are unstoppable!</p>
                    
                    <h3>Civil Rights History - Students Who Changed America</h3>
                    <p>ASU students participated in major Civil Rights Movement events:</p>
                    <ul>
                        <li><strong>Montgomery Bus Boycott (1955-1956):</strong> ASU students supported the boycott after Rosa Parks' arrest</li>
                        <li><strong>Freedom Rides (1961):</strong> ASU students joined the movement</li>
                        <li><strong>Selma to Montgomery March (1965):</strong> The march ENDED at the Alabama State Capitol - ASU students participated</li>
                        <li>ASU students risked expulsion, arrest, and violence to fight for justice</li>
                    </ul>
                    
                    <h3>Historic Campus</h3>
                    <p>The ASU campus includes historic buildings and modern facilities. Students walk the same ground where civil rights heroes studied and organized!</p>
                `,
                quiz: {
                    question: "What year was Alabama State University founded?",
                    options: [
                        "1865",
                        "1867",
                        "1900",
                        "1954"
                    ],
                    correct: 1
                }
            },
            library: {
                title: "Academic Programs at ASU",
                content: `
                    <h3>Academic Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~4,700</li>
                        <li><strong>Student-to-Faculty Ratio:</strong> 17:1</li>
                        <li><strong>Degree Programs:</strong> 50+ undergraduate and graduate programs</li>
                        <li><strong>Colleges:</strong> 5 colleges</li>
                        <li><strong>Doctoral Programs:</strong> PhD in Educational Leadership</li>
                    </ul>
                    
                    <h3>Colleges & Schools</h3>
                    <ul>
                        <li>College of Business Administration</li>
                        <li>College of Education</li>
                        <li>College of Health Sciences</li>
                        <li>College of Liberal Arts and Social Sciences</li>
                        <li>College of Science, Mathematics, Engineering and Technology</li>
                    </ul>
                    
                    <h3>Top Academic Programs</h3>
                    <ul>
                        <li><strong>Teacher Education:</strong> ASU was founded to train teachers and STILL produces excellent educators today! Education majors learn to teach elementary, middle, and high school.</li>
                        <li><strong>Business Administration:</strong> Accounting, marketing, management, finance - future entrepreneurs and Fortune 500 executives</li>
                        <li><strong>Nursing & Health Sciences:</strong> Training registered nurses, occupational therapy assistants, and healthcare professionals</li>
                        <li><strong>Criminal Justice:</strong> Preparing students for law enforcement, corrections, and legal careers</li>
                        <li><strong>Social Work:</strong> Training counselors and community advocates</li>
                        <li><strong>Music:</strong> Vocal and instrumental music education</li>
                        <li><strong>Communications:</strong> Journalism, broadcasting, public relations</li>
                    </ul>
                    
                    <h3>Graduate & Doctoral Programs</h3>
                    <ul>
                        <li>Master of Business Administration (MBA)</li>
                        <li>Master of Education (various specializations)</li>
                        <li>Master of Science programs</li>
                        <li>PhD in Educational Leadership</li>
                    </ul>
                    
                    <h3>Levi Watkins Learning Center</h3>
                    <p>ASU's library and academic support center provides study spaces, computer labs, tutoring, and resources for student success!</p>
                    
                    <h3>Hands-On Learning - Montgomery Advantage</h3>
                    <p>ASU students get real-world experience through internships at:</p>
                    <ul>
                        <li>Alabama State Capitol and government offices</li>
                        <li>Montgomery businesses and corporations</li>
                        <li>Schools and educational organizations</li>
                        <li>Healthcare facilities and hospitals</li>
                        <li>Civil rights museums and historical sites</li>
                    </ul>
                `,
                quiz: {
                    question: "How many colleges does Alabama State University have?",
                    options: [
                        "3",
                        "5",
                        "7",
                        "10"
                    ],
                    correct: 1
                }
            },
            stem: {
                title: "STEM at Alabama State",
                content: `
                    <h3>Science & Technology</h3>
                    <p>Alabama State has strong programs in biology, chemistry, mathematics, and computer science!</p>
                    
                    <h3>STEM Excellence</h3>
                    <ul>
                        <li><strong>Pre-Med Programs:</strong> Many ASU graduates go on to medical school and become doctors</li>
                        <li><strong>Engineering Technology:</strong> Students learn to design and build technology</li>
                        <li><strong>Mathematics:</strong> Preparing future math teachers and data scientists</li>
                        <li><strong>Computer Science:</strong> Training programmers and tech professionals</li>
                    </ul>
                    
                    <h3>Research Opportunities</h3>
                    <p>ASU students conduct research in science labs, work with professors on projects, and present their findings at conferences!</p>
                    
                    <h3>NASA Partnership</h3>
                    <p>ASU works with NASA's Marshall Space Flight Center, giving students opportunities to work on space technology!</p>
                `,
                quiz: {
                    question: "Which NASA center does ASU partner with?",
                    options: [
                        "Kennedy Space Center",
                        "Johnson Space Center",
                        "Marshall Space Flight Center",
                        "Goddard Space Center"
                    ],
                    correct: 2
                }
            },
            "student-center": {
                title: "The Mighty Hornet Experience",
                content: `
                    <h3>Student Life Quick Facts</h3>
                    <ul>
                        <li><strong>Total Students:</strong> ~4,700</li>
                        <li><strong>States Represented:</strong> 40+ states</li>
                        <li><strong>On-Campus Housing:</strong> 9 residence halls</li>
                        <li><strong>Student Organizations:</strong> 100+ clubs and organizations</li>
                    </ul>
                    
                    <h3>Black and Gold Pride - The Hornet Nation</h3>
                    <p>Alabama State students wear their black and gold with PRIDE! The Hornet family is tight-knit, supportive, and fiercely loyal! Once a Hornet, always a Hornet!</p>
                    
                    <h3>The Mighty Marching Hornets Band</h3>
                    <p>ASU's marching band, "The Mighty Marching Hornets," is one of the BEST HBCU bands in the nation!</p>
                    <ul>
                        <li>Over 200 members strong</li>
                        <li>Performed at NFL games, NBA games, and major national events</li>
                        <li>Known for high-energy performances and creative shows</li>
                        <li>Competed in Honda Battle of the Bands multiple times</li>
                        <li>The band's signature style is recognized nationwide!</li>
                    </ul>
                    
                    <h3>Athletics - ASU Hornets</h3>
                    <ul>
                        <li><strong>Conference:</strong> Southwestern Athletic Conference (SWAC) - NCAA Division I</li>
                        <li><strong>Teams:</strong> Football, basketball, baseball, softball, volleyball, bowling, golf, tennis, track & field, cross country</li>
                        <li><strong>Stadium:</strong> ASU Stadium (26,500 capacity for football)</li>
                        <li><strong>Championships:</strong> Multiple SWAC championships across sports</li>
                    </ul>
                    
                    <h3>The Magic City Classic</h3>
                    <p>Every year, ASU plays against Alabama A&M in Birmingham's Legion Field. The Magic City Classic is one of the BIGGEST HBCU football games in America!</p>
                    <ul>
                        <li><strong>Attendance:</strong> Over 60,000 fans annually</li>
                        <li><strong>Started:</strong> 1924</li>
                        <li><strong>Location:</strong> Birmingham, Alabama (the "Magic City")</li>
                        <li><strong>Halftime:</strong> Epic battle of the bands</li>
                        <li><strong>Weekend:</strong> Parades, concerts, parties - entire weekend celebration</li>
                    </ul>
                    
                    <h3>Greek Life - Divine Nine</h3>
                    <p>ASU is home to all nine Divine Nine organizations:</p>
                    <ul>
                        <li>Alpha Phi Alpha Fraternity, Inc.</li>
                        <li>Alpha Kappa Alpha Sorority, Inc.</li>
                        <li>Kappa Alpha Psi Fraternity, Inc.</li>
                        <li>Omega Psi Phi Fraternity, Inc.</li>
                        <li>Delta Sigma Theta Sorority, Inc.</li>
                        <li>Phi Beta Sigma Fraternity, Inc.</li>
                        <li>Zeta Phi Beta Sorority, Inc.</li>
                        <li>Sigma Gamma Rho Sorority, Inc.</li>
                        <li>Iota Phi Theta Fraternity, Inc.</li>
                    </ul>
                    
                    <h3>Famous Hornets - Civil Rights Heroes</h3>
                    <ul>
                        <li><strong>Ralph David Abernathy (Class of 1950):</strong> Dr. Martin Luther King Jr.'s closest friend and partner in the Civil Rights Movement. Co-founded Southern Christian Leadership Conference (SCLC). Succeeded MLK as president of SCLC after King's assassination.</li>
                        <li><strong>JoAnn Robinson (taught at ASU 1949-1960):</strong> English professor at ASU who organized and led the Montgomery Bus Boycott. Stayed up all night mimeographing 35,000 leaflets calling for the boycott!</li>
                        <li><strong>Fred Gray (Class of 1951):</strong> Legendary civil rights attorney who represented Rosa Parks, Martin Luther King Jr., and the Tuskegee Syphilis Study victims. First Black member of Alabama legislature since Reconstruction.</li>
                        <li><strong>Thousands of teachers and educators:</strong> Who taught Black children across the South when few others would</li>
                        <li><strong>Business leaders, pastors, and community organizers:</strong> Serving communities nationwide</li>
                    </ul>
                    
                    <h3>Student Organizations</h3>
                    <ul>
                        <li>Student Government Association</li>
                        <li>Campus Activities Board</li>
                        <li>The Hornet Tribune (student newspaper)</li>
                        <li>WVAS 90.7 FM (student radio)</li>
                        <li>Pre-professional clubs</li>
                        <li>Cultural and service organizations</li>
                    </ul>
                    
                    <h3>Living History - Walking Where Heroes Walked</h3>
                    <p>Being a student at ASU means:</p>
                    <ul>
                        <li>Walking where Ralph Abernathy and civil rights heroes walked</li>
                        <li>Studying in the same city where Rosa Parks refused to give up her seat</li>
                        <li>Living near the Dexter Avenue King Memorial Baptist Church where Dr. King preached</li>
                        <li>Continuing the legacy of fighting for justice and equality</li>
                        <li>Being part of a university that helped change America!</li>
                    </ul>
                `,
                quiz: {
                    question: "Who was Ralph Abernathy's closest partner in the Civil Rights Movement?",
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
    }
};

// State Management
let currentUniversity = null;
let currentLocation = null;
let progress = {};
let studentName = '';

// Initialize App
function initApp() {
    loadProgress();
    loadStudentName();
    updateAllProgress();
}

// Load and save student name
function loadStudentName() {
    const saved = localStorage.getItem('hbcu_explorer_student_name');
    if (saved) {
        studentName = saved;
        const input = document.getElementById('student-name-input');
        if (input) input.value = studentName;
    }
}

function saveStudentName(name) {
    studentName = name;
    localStorage.setItem('hbcu_explorer_student_name', name);
}

function startExploring() {
    const nameInput = document.getElementById('student-name-input');
    const name = nameInput.value.trim();
    
    if (name === '') {
        alert('Please enter your name before exploring! 😊');
        nameInput.focus();
        return;
    }
    
    saveStudentName(name);
    showScreen('university-select');
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
    
    // Display student name on certificate
    const displayName = studentName || 'HBCU Explorer';
    document.querySelector('.student-name').textContent = displayName;
    
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

// Reset All Progress
function resetAllProgress() {
    const confirmed = confirm(
        "Are you sure you want to reset ALL progress?\n\n" +
        "This will:\n" +
        "• Clear all HBCU visits and quiz answers\n" +
        "• Remove your name\n" +
        "• Start completely fresh\n\n" +
        "This cannot be undone!"
    );
    
    if (confirmed) {
        // Clear all localStorage data
        localStorage.removeItem('hbcu-explorer-progress');
        localStorage.removeItem('hbcu_explorer_student_name');
        
        // Reset global variables
        progress = {};
        studentName = '';
        currentUniversity = null;
        currentLocation = null;
        
        // Clear the name input
        const nameInput = document.getElementById('student-name-input');
        if (nameInput) {
            nameInput.value = '';
        }
        
        // Update UI
        updateAllProgress();
        
        // Return to welcome screen
        showScreen('welcome-screen');
        
        // Show confirmation message
        alert("✅ Progress reset! Enter your name to start fresh.");
    }
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
