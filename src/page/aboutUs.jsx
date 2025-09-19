import { Link } from 'react-router-dom'

export const AboutUs = () => {
    return <>

        <div className="bg-gray-100 py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-600">Why Choose Micro Sonic for Digital Marketing & Development?</h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-600">At Micro Sonic, we are more than just a digital marketing and development company—we are your strategic partner in growth. Whether you need a powerful website, an engaging app, or an effective digital marketing strategy, we provide tailored solutions that deliver real results.</p>
                </div>

                {/* Section 1: Proven Expertise */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">1. Proven Expertise in Web & App Development</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Custom Solutions:</strong> We don’t believe in one-size-fits-all. We create custom websites and apps tailored to your business needs.</li>
                            <li><strong>Cutting-Edge Technology:</strong> Our team specializes in responsive, high-performance, and secure websites and applications.</li>
                            <li><strong>Seamless UX/UI:</strong> Every project is designed with the user in mind, ensuring maximum engagement and satisfaction.</li>
                        </ul>
                    </div>

                    {/* Section 2: Digital Marketing */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">2. Result-Driven Digital Marketing</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>SEO Excellence:</strong> We implement advanced SEO strategies that improve search rankings and drive organic traffic.</li>
                            <li><strong>Social Media Growth:</strong> We help brands increase engagement and reach their target audience on platforms like Facebook, Instagram, LinkedIn, and more.</li>
                            <li><strong>Paid Advertising (PPC):</strong> Our Google Ads & social media advertising campaigns are optimized for maximum ROI.</li>
                            <li><strong>Content Marketing:</strong> From blogs to video content, we create compelling content that builds brand authority and connects with your audience.</li>
                        </ul>
                    </div>

                    {/* Section 3: Analytics */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">3. Data-Driven Strategy & Analytics</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Real-Time Performance Tracking:</strong> We use advanced analytics to track performance, optimize strategies, and improve conversions.</li>
                            <li><strong>A/B Testing & Optimization:</strong> We continually test and refine campaigns to ensure the highest possible success rates.</li>
                            <li><strong>Transparent Reporting:</strong> You’ll always know how your campaigns are performing with detailed reports and insights.</li>
                        </ul>
                    </div>
                </div>

                {/* Section 4: Testimonials */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-blue-600">Trusted by Businesses Worldwide</h2>
                    <p className="mt-4 text-lg text-gray-600">Our proven track record and commitment to excellence has earned us a strong reputation for trust, reliability, and innovation.</p>
                </div>

                {/* Section 5: Scalable Services */}
                <div className="mt-16 bg-blue-600 text-white p-12 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold">5. Comprehensive & Scalable Services</h2>
                    <p className="mt-4 text-lg">Whether you’re a startup, growing business, or established brand, our solutions scale with your needs. We offer end-to-end services, from website development to marketing execution, eliminating the need for multiple service providers.</p>
                </div>

                {/* Section 6: Security */}
                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">6. Security & Compliance You Can Trust</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>Secure Web & App Development:</strong> We prioritize data security, encryption, and compliance with industry standards.</li>
                            <li><strong>Ad Policy Compliance:</strong> We ensure all digital marketing campaigns follow Google Ads, Facebook, and SEO best practices to avoid violations.</li>
                        </ul>
                    </div>

                    {/* Section 7: Support */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-blue-600">7. Dedicated Customer Support</h2>
                        <ul className="mt-4 space-y-4 text-gray-600">
                            <li><strong>24/7 Support:</strong> Our team is available around the clock to assist with any questions or technical issues.</li>
                            <li><strong>Personalized Attention:</strong> We assign a dedicated project manager to every client for smooth communication and seamless execution.</li>
                        </ul>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-blue-600">Get Started with Micro Sonic Today!</h2>
                    <p className="mt-4 text-lg text-gray-600">Whether you need a stunning website, an engaging mobile app, or a data-driven digital marketing strategy, Micro Sonic is the partner you can trust to grow your business and maximize ROI.</p>
                    <Link to="/query" className="mt-8 inline-block py-3
                     px-6 text-lg font-semibold bg-blue-500 text-white rounded-md 
                     hover:bg-blue-600">Let’s Talk! – Contact us today for a free consultation!</Link>
                </div>
            </div>
        </div>

    </>
}