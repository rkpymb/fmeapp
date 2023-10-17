import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '@/app/Components/Navbar'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Privacy Policy</h1>
            <p>Last updated: [DATE]</p>

            <h2>Introduction</h2>
            <p>Welcome to Flairmyevent ("us", "we", or "our"). We are committed to protecting your personal information and your right to privacy. This privacy policy applies to our website and any related services and explains how we collect, use, and disclose your personal information. By accessing or using our services, you agree to the terms of this privacy policy. If you do not agree with the practices described in this policy, please do not use our services.</p>

            <h2>Information We Collect</h2>
            <p>Here, you should outline the types of personal information you collect from users. This may include:</p>
            <ul>
                <li>Information provided voluntarily by users (e.g., name, email address, etc.)</li>
                <li>Automatically collected information (e.g., IP address, browser type, etc.)</li>
                <li>Cookies and similar technologies</li>
                <li>Third-party analytics tools</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>Explain how you use the collected information, including:</p>
            <ul>
                <li>Providing and personalizing our services</li>
                <li>Analyzing and improving our website</li>
                <li>Contacting users with updates or marketing materials (if applicable)</li>
                <li>Responding to user inquiries and support requests</li>
                <li>Complying with legal obligations</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>Outline any third-party services or plugins used on your website and how they handle user information. Include links to their respective privacy policies.</p>

            <h2>Cookies and Similar Technologies</h2>
            <p>Explain your use of cookies, web beacons, and similar technologies for tracking and analyzing user behavior. Include a link to your Cookie Policy, if applicable.</p>

            <h2>Security</h2>
            <p>Describe the security measures you have in place to protect users' personal information.</p>

            <h2>Your Choices</h2>
            <p>Inform users about their rights and choices regarding their personal information and how they can update or delete their data.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>State that you may update the privacy policy from time to time and how you will notify users of any material changes.</p>

            <h2>Contact Us</h2>
            <p>Provide contact information (e.g., email address) for users to reach out to you regarding privacy concerns or questions.</p>


        </main>
    )
}
