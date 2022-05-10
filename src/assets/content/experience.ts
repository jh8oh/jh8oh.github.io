class Experience {
  constructor(
    private id: number,
    private employer: string,
    private position: string,
    private website: string,
    private dates: string,
    private description: string
  ) {}
}

export const dcCanada = new Experience(
  0,
  "DC Canada Education Publishing",
  "Web/Android Developer",
  "https://www.dc-canada.ca/",
  "Jan - Apr 2020",
  "Worked on maintaining the existing <a href=\"https://onestoryaday.ca\">One Story a Day website</a> and developing an app for it<br /><strong>Web Developer</strong><ul><li>Maintained and added new content and features on a WordPress-powered website.</li><li>Integrated MotionPay into the payment system for the Chinese domain which allowed customers to pay by scanning a QR code in Alipay/WeChat pay.</ul><strong>Android Developer</strong><ul><li>Solo development and design of an Android eBook reader titled 'One Story a Day'.</li><li>Connects with the LMS on the website to sync up users between the site and the app.</li></ul>"
);

export const innovapost = new Experience(
  1,
  "Innovapost",
  "Android/Innovation Developer",
  "https://innovapost.com/",
  "Sept - Dec 2020",
  "Split between working on the Android-platform team and the 'Innovation Garage'.<br /><strong>Android Developer</strong><ul><li>Fixed production bugs and implemented new features for the Canada Post application.</li></ul><strong>'Innovation Garage' Developer</strong><ul><li>Researched the logistics behind implementing progressive registration and OAuth 2.0 on the app.</li><li>Part of a pilot team to eliminate the need for ring scanners and instead use wrist-mounted PDTs which automatically (de)activate their scanner based on the gravimeter.</li></ul>"
);

export const theScore = new Experience(
  2,
  "theScore Inc",
  "Android Developer",
  "https://www.thescore.com/",
  "May - Aug 2021",
  "Part of Android team for theScore Media app.<br /><ul><li>Worked on migrating the application from Kotlin Synthetics to View Binding along with fixing bugs and mitigating tech debt.</li><li>Studied a new architecture that used the MVVM design pattern, which recycled the same fragment for different screens and populated them with unique <code>ViewHolders</code> using <code>Adapters</code>.</li><li>Researched the  methods of obtaining views after the deprecation of Kotlin Synthetics and how they could integrate into the unique architecture of the application.</li></ul>"
);

export const nearside = new Experience(
  3,
  "Nearside",
  "Android Developer",
  "https://www.nearside.com/",
  "Jan - Apr 2022",
  "Part of the Android mobile team for the Nearside app.<br /><ul><li>Assisted in the redesign of the mobile app as the company rebranded from Hatch to Nearside.</li><li>Worked on revamping the user signup flow to match the web flow so that users can seamlessly swap between the two. Uses <code>Persona</code>, an API that extracts data from personal identification.</li><li>Designed a new login flow to include biometric login functionality. Implemented using the <code>Biometrics</code> and <code>Cipher</code> library.</li></ul>"
);
