import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-10 w-full px-4 md:px-8 py-16 flex flex-col items-center sm:scroll-mt-0">
            <div className="w-full max-w-7xl text-center">
                <h2 className="text-2xl pt-4 mb-8 text-main-green font-bold">Contact</h2>
                <p className="text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
                    Get in touch with me.
                </p>
                
                <ContactForm />
            </div>
        </section>
    )
} 