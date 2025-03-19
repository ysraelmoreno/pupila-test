import { ImagePlaceholder } from "../../../../components/ImagePlaceholder";
import styles from "./styles.module.scss";

export interface ImageProps {
  url: string;
  isImageValid: boolean;
}

export const ModalImage = ({ url, isImageValid }: ImageProps) => {
  if (url === "") return <ImagePlaceholder />;

  if (!isImageValid)
    return (
      <ImagePlaceholder>
        It looks like the image doesnt exist, please try another URL
      </ImagePlaceholder>
    );

  return <img src={url} className={styles.image} />;
};
