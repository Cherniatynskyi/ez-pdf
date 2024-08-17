
import React from 'react';
import Modal, {ModalProps} from './Modal.tsx';
import PdfPreview from './HomePageComponents/PdfPreview.tsx';

export interface PreviewModalInterface extends ModalProps {
  onShow: Boolean;
}

export default function PreviewModal({
  onShow,
  ...rest
}: PreviewModalInterface) {
  return (
    <Modal {...rest}>
        <PdfPreview/>
    </Modal>
  );
}