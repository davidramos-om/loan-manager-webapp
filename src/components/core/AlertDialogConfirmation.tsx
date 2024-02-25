import { useRef, cloneElement } from 'react';
import {
  AlertDialog,
  AlertDialogProps,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  ButtonProps,
  useDisclosure,
} from '@chakra-ui/react';

type Props = {
  bindComponent: React.ReactElement;
  title: string;
  description?: string;
  cancelBtnText: string;
  dialogProps?: AlertDialogProps;
  cancelButtonProps?: ButtonProps;
  confirmBtnText: string;
  confirmButtonProps?: ButtonProps;
  confirmAction?: () => void;
  cancelAction?: () => void;
};

export function AlertDialogConfirmation(props: Props) {
  const {
    title,
    description,
    cancelBtnText,
    confirmBtnText,
    confirmAction,
    cancelAction,
    bindComponent,
    dialogProps = { isCentered: true, autoFocus: false, closeOnEsc: false },
    cancelButtonProps = { colorScheme: 'gray' },
    confirmButtonProps = { colorScheme: 'red', ml: 3 },
  } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cancelRef = useRef<any>();

  const handleConfirmAction = () => {
    onClose();
    confirmAction?.();
  };

  const handleCancelAction = () => {
    onClose();
    cancelAction?.();
  };

  return (
    <>
      {cloneElement(bindComponent, { onClick: onOpen })}
      <AlertDialog {...dialogProps} isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            {description && <AlertDialogBody>{description}</AlertDialogBody>}

            <AlertDialogFooter>
              <Button {...cancelButtonProps} ref={cancelRef} onClick={handleCancelAction}>
                {cancelBtnText}
              </Button>
              <Button {...confirmButtonProps} onClick={handleConfirmAction}>
                {confirmBtnText}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
