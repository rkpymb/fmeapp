import Image from 'next/image'
import styles from '../page.module.css'
import Navbar from '@/app/Components/Navbar'

export default function Home() {
    return (
        <main className={styles.main}>
           
            <h1>Terms and Conditions</h1>
            <p>Last updated: [DATE]</p>

            <h2>1. Acceptance of Terms</h2>
            <p>Welcome to flairmyevent.com. By accessing or using our website and services, you agree to comply with and be bound by the following terms and conditions ("Terms"). If you do not agree with these Terms, please do not use our website.</p>

            <h2>2. Use of Our Website</h2>
            <p>Flair My Event allows users to [describe the purpose of your website and services]. You agree not to use our website for any unlawful purpose or in any way that may impair the performance, functionality, or availability of our site. You are responsible for ensuring that all persons who access our site through your internet connection are aware of these Terms and comply with them.</p>

            <h2>3. User Accounts and Registration</h2>
            <p>In order to access certain features of our website, you may need to register for an account. You must provide accurate and complete information during the registration process and keep your account credentials confidential. You are responsible for all activities that occur under your account.</p>

            <h2>4. Intellectual Property</h2>
            <p>The content, logos, trademarks, and other intellectual property displayed on our website are owned by flairmyevent.com and its licensors. You may not use, reproduce, modify, or distribute any of the content without our explicit permission.</p>

            <h2>5. User-Generated Content</h2>
            <p>Users may be allowed to submit content, such as event listings or reviews. By submitting content, you grant flairmyevent.com a non-exclusive, royalty-free, perpetual, and worldwide license to use, display, reproduce, and distribute the content on our website and other marketing materials.</p>

            <h2>6. Third-Party Websites</h2>
            <p>Our website may contain links to third-party websites or services that are not owned or controlled by flairmyevent.com. We do not endorse or assume any responsibility for the content or practices of these third-party sites. Your interactions with third-party websites are solely between you and the third party.</p>

            <h2>7. Limitation of Liability</h2>
            <p>Flairmyevent.com and its affiliates shall not be liable for any direct, indirect, incidental, consequential, or special damages arising out of or in connection with your use of our website or services.</p>

            <h2>8. Indemnification</h2>
            <p>You agree to indemnify and hold flairmyevent.com and its affiliates harmless from any claims, damages, or expenses arising out of your use of our website, violation of these Terms, or infringement of any intellectual property or other right of any person or entity.</p>

            <h2>9. Changes to the Terms</h2>
            <p>We reserve the right to modify or replace these Terms at any time. The date of the last update will be indicated at the beginning of this page. Your continued use of our website after any changes to the Terms constitutes acceptance of those changes.</p>

            <h2>10. Contact Us</h2>
            <p>If you have any questions or concerns about these Terms, please contact us at [contact email or address].</p>


        </main>
    )
}
