import React from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

const Pdf = ({ title, downloadLink }) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = downloadLink;
        link.download = `${title}.pdf`; // You can customize the downloaded file name
        link.click();
      };
      const {isOpen, onOpen, onOpenChange} = useDisclosure();

     const sendEmail = () => {
        window.open("mailto:ananisamuelhope@gmail.com?subject=SendMail&body=Description");
      };
      
    
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 border rounded shadow-lg bg-white mb-4">
      {/* Title */}
      <div className="flex-grow mb-2 sm:mb-0 sm:mr-2">
        <h2 className="text-xl font-bold">{title}</h2>
      </div>

      {/* Download Button */}
      <div>
        <Button
          className="bg-[#173e26] text-white p-2 px-4 rounded hover:bg-[#112e1c]"
          // onClick={handleDownload}
          onPress={onOpen}
        >
          Download
        </Button>

        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p> 
                  If you want to access this pdf send as a request through our email.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={sendEmail}>
                  Send Email
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      </div>
    </div>
  );
};

export default Pdf;
