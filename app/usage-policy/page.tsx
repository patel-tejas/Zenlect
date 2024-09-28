import React from 'react'

const page = () => {
  return (
    <div className='h-full py-10 font-poppins'>
      <h1 className='text-xl md:text-4xl font-bold text-center font-poppins'>
        Usage Policy

      </h1>
      <div className="container mx-auto px-4 py-8">

        <p className="text-[17px] text-gray-400 font-light mb-4">Last updated: September 28, 2024</p>

        <p className="text-lg mb-6">This Usage Policy outlines the rules and guidelines for using our services. By accessing or using our services, you agree to comply with this policy. Please review it carefully before using our services.</p>

        <h2 className="text-xl md:text-xl font-bold mb-4">Prohibited Activities</h2>
        <p className="text-lg mb-6">You agree not to use our services for any illegal, harmful, or abusive purpose. This includes, but is not limited to, the following activities:</p>
        <ul className="list-disc list-inside text-lg md:text-xl mb-4">
          <li>Engaging in any activity that violates any applicable law, regulation, or court order.</li>
          <li>Impersonating any person or entity, or falsely stating or otherwise misrepresenting your affiliation with a person or entity.</li>
          <li>Interfering with or disrupting the integrity or performance of our services or the data contained therein.</li>
          <li>Attempting to gain unauthorized access to our services, systems, or networks.</li>
          <li>Using the service to send unsolicited communications or promotions, also known as &quot;spam&quot;.</li>
          <li>Uploading or sharing content that is offensive, defamatory, harmful, or otherwise objectionable.</li>
        </ul>

        <h2 className="text-xl md:text-xl font-bold mb-4">Account Security</h2>
        <p className="text-lg mb-6">You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>

        <h2 className="text-xl md:text-xl font-bold mb-4">Content Ownership</h2>
        <p className="text-lg mb-6">All content, trademarks, logos, and service marks displayed on our services are the property of the Company or third parties. You agree not to use, reproduce, or distribute any such content without our express written permission or the permission of the respective owners.</p>

        <h2 className="text-xl md:text-xl font-bold mb-4">Termination of Access</h2>
        <p className="text-lg mb-6">We reserve the right to suspend or terminate your access to our services at our sole discretion, without prior notice, if we believe that you have violated this Usage Policy or any applicable law or regulation.</p>

        <h2 className="text-xl md:text-xl font-bold mb-4">Changes to the Policy</h2>
        <p className="text-lg mb-6">We may update this Usage Policy from time to time to reflect changes in our practices or applicable laws. You will be notified of any material changes to this policy via email or through a prominent notice on our services prior to the change becoming effective.</p>

        <p className="text-lg mb-6">By continuing to use our services after such changes take effect, you agree to the updated Usage Policy.</p>

        <h2 className="text-xl md:text-xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-6">If you have any questions about this Usage Policy, please contact us at:</p>

        <p className="text-lg mb-6">Email: support@zenlect.com</p>
      </div>


    </div>
  )
}

export default page