import { Button, ButtonIcon, ButtonText } from '@/components/ui/button'
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
import { Icon, CloseIcon, ChevronLeftIcon } from '@/components/ui/icon'
import React from 'react'
import { useAddFoodModalStore } from '@/store/useAddFoodModalStore'
import EmojiList from './EmojiList'
import { FoodEmoji } from '@/types/FoodEmoji'
import DetailedEmojiView from './DetailedEmojiView'
import { useMealDiaryStore } from '@/store/useMealDiaryStore'
import { getToday } from '@/constants/calendar'

export default function AddFoodModal() {
  const { showModal, setShowModal } = useAddFoodModalStore()
  const { addItem } = useMealDiaryStore()
  const [selectedEmoji, setSelectedEmoji] = React.useState<FoodEmoji>()
  const [selectedDate, setSelectedDate] = React.useState(getToday())

  const handleClose = () => {
    selectedEmoji && addItem({ dateAdded: selectedDate, ...selectedEmoji })

    // setSelectedEmoji(undefined)
    setShowModal(false)
  }

  const handleX = () => {
    if (selectedEmoji) {
      setSelectedEmoji(undefined)
    } else {
      setShowModal(false)
    }
  }

  return (
    <Modal isOpen={showModal} onClose={handleX} size="lg">
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
          {!selectedEmoji && <EmojiList setEmoji={setSelectedEmoji} />}
          {!!selectedEmoji && (
            <DetailedEmojiView
              emoji={selectedEmoji}
              setSelectedDate={setSelectedDate}
              selectedDate={selectedDate}
            />
          )}
        </ModalBody>
        <ModalFooter>
          {!selectedEmoji && (
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setShowModal(false)
              }}
            >
              <ButtonText>Close</ButtonText>
            </Button>
          )}

          {!!selectedEmoji && (
            <Button
              variant="outline"
              action="secondary"
              onPress={() => {
                setSelectedEmoji(undefined)
              }}
            >
              <ButtonIcon as={ChevronLeftIcon} />
              <ButtonText>Back</ButtonText>
            </Button>
          )}
          {!!selectedEmoji && (
            <Button onPress={handleClose}>
              <ButtonText>Add {selectedEmoji?.emoji}</ButtonText>
            </Button>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
