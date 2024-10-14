import React from 'react'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/modal'

interface CustomDrawerProps extends React.HTMLProps<HTMLDivElement> {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export default function CustomDrawer({...props}: CustomDrawerProps) {
  return (
    <Modal
      scrollBehavior="inside"
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      placement="center"
      size="full"
      classNames={{
        wrapper: 'flex justify-end',
        backdrop: 'bg-black bg-opacity-30',
      }}
      motionProps={{
        variants: {
          enter: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.1,
              ease: 'easeOut',
            },
          },
          exit: {
            x: 50,
            opacity: 0,
            transition: {
              duration: 0.1,
              ease: 'easeIn',
            },
          },
        },
      }}
      className="max-w-lg w-full rounded-2xl h-[calc(100dvh)] max-h-screen"
    >
      <ModalContent className="z-50">
        {(onClose) => <>{props.children}</>}
      </ModalContent>
    </Modal>
  )
}
