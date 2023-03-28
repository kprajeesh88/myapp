import Image1 from "./assets/img-1.png";
import Image2 from "./assets/img-2.jpg";
import Image3 from "./assets/img-3.jpg";
import Article from "./Article";

export default function Blog() {
  const article = [
    {
      itemTitle: "Life is short and the world is wide.I better get started.",
      itemContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
        itemImage: Image1
    },
    {
      itemTitle: "I better get started.Life is short and the world is wide.",
      itemContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        itemImage: Image2
    },
    {
      itemTitle: "I better get started.Life is short and the world is wide.",
      itemContent:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry",
        itemImage: Image3
    },
  ];
  return (
    <div>
      {article.map((postItem) => {
        return (
          <Article
            itemTitle={postItem.itemTitle}
            itemContent={postItem.itemContent}
            itemImage={postItem.itemImage}
          />
        );
      })}
    </div>
  );
}
