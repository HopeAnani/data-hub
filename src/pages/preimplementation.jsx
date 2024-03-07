import React from 'react'
import ComingSoon from '../components/ComingSoon'
import { Link } from "react-router-dom";
import imp from '../images/pre.svg'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import sample1 from '../images/Samplepdf.pdf';

const Preimplementaion = () => {
  const pdfs = [ 
    { downloadLink: sample1, isFree: false, title: "Investment Sector Guide" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleDownload = (downloadLink) => {
    const link = document.createElement('a');
    link.href = downloadLink;
    link.target = '_blank'; // Open in a new tab
    link.click();
  };


  const sendEmail = () => {
    window.open("mailto:infoaceadvisors.org?subject=SendMail&body=Description");
  };
  return (
    <div className='w-full h-full flex flex-wrap items-center justify-center'>
      {/* <ComingSoon/> */}
      <img src={imp} alt="" className='md:w-[30%] max-sm:mx-4' />
      <div className="w-full md:w-[350px] mx-6 my-4 bg-white rounded-md overflow-hidden shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2 text-center">Pre-Implementation</h2>
          <p className="text-gray-600 mb-4 text-justify">This early stage involves securing all required licenses and approvals to carry out planned business activities. Obtaining the proper documentation during establishment lays the groundwork for smooth implementation.</p>
        </div>
      </div>
      {pdfs.map((pdf,index) =>( 
                      <div key={index} class="mt-6 mb-6 max-sm:mx-2">
                          <div class="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
                              <div class="flex items-center justify-between"><span class="font-light text-gray-600">Mar 5,
                                      2024</span>
                                      {/* <Link to="" class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]">Economy</Link> */}
                              </div>
                              <div class="mt-2"><Link to="" class="text-2xl font-bold text-[#173e26] hover:underline ">{pdf.title}</Link>
                                  <p class="mt-2 text-black text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                      Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                      reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                              </div>
                              <div class="flex items-center justify-between mt-4">
                                <Link class="px-2 py-1 font-bold text-gray-100 bg-[#173e26] rounded hover:bg-[#24542f]" onClick={() => pdf.isFree ? handleDownload(pdf.downloadLink) : onOpen()}>Read more</Link>
                                  <div>
                                    <a href="#" class="flex items-center">
                                      <img src="https://www.flagcolorcodes.com/filter?f=ethiopia&e=waves"
                                           alt="avatar" class="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"/>
                                      <h1 class="font-bold text-[#173e26] hover:underline">Ethiopia</h1>
                                    </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      ))}

                      <Modal isOpen={isOpen} onClose={onClose}>
                        <ModalContent>
                          <ModalHeader>Send Email</ModalHeader>
                          <ModalBody>
                            Interested? Please send us a request through our email info@aceadvisors.org.
                          </ModalBody>
                          <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>Close</Button>
                            <Button color='success' variant='light' onClick={sendEmail}>Send Email</Button>
                          </ModalFooter> 
                        </ModalContent>
                      </Modal>
      
    </div>
  )
}

export default Preimplementaion