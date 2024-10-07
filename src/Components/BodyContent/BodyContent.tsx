import { useGetHomePageServiceContents } from "../../Queries/homePageServiceQueries";
import { ContentType } from "../../Types/common";
import ContentContainer from "../ContentContainer/ContentContainer";


const BodyContent = () => {
  const {data : contents} = useGetHomePageServiceContents();
  return (
    <>
    {
        contents.map((content : ContentType ) => {
            return <ContentContainer key={content.id} {...content} />
        })
    }
    </>
  )
}

export default BodyContent