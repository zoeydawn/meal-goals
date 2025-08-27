import { Button, ButtonText } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@/components/ui/modal'
import { Icon, CloseIcon } from '@/components/ui/icon'
import React from 'react'
import { useAddFoodModalStore } from '@/store/useAddFoodModalStore'
import EmojiList from './EmojiList'

export default function AddFoodModal() {
  const { showModal, setShowModal } = useAddFoodModalStore()

  return (
    <Modal
      isOpen={showModal}
      onClose={() => {
        setShowModal(false)
      }}
      size="lg"
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="md" className="text-typography-950">
            Add Food
          </Heading>
          <ModalCloseButton>
            <Icon
              as={CloseIcon}
              size="md"
              className="stroke-background-400 group-[:hover]/modal-close-button:stroke-background-700 group-[:active]/modal-close-button:stroke-background-900 group-[:focus-visible]/modal-close-button:stroke-background-900"
            />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <EmojiList />
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            action="secondary"
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Cancel</ButtonText>
          </Button>
          <Button
            onPress={() => {
              setShowModal(false)
            }}
          >
            <ButtonText>Done</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
