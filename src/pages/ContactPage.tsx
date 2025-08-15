import ContactForm from '../components/ContactForm';

export default function Contact() {
    return (
        <section id="contact" className="scroll-mt-10 w-full px-4 md:px-8 py-16 text-center sm:scroll-mt-0">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to discuss opportunities? 
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                </p>
                
                <ContactForm />
            </div>
        </section>
    )
} 