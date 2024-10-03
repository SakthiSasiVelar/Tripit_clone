import { contents } from "../../utils/homepageContent";
import ContentContainer from "../ContentContainer/ContentContainer";

const BodyContent = () => {
  return (
    <>
    {
        contents.map((content) => {
            return <ContentContainer key={content.id} {...content} />
        })
    }
    </>
  )
}

export default BodyContent