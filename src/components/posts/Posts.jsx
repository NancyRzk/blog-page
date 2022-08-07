import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post category="Adventure" img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
      <Post category="Innovation" img="https://cdn.pixabay.com/photo/2020/04/03/06/35/work-4997565__340.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post category="Nature" img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post category="MakeUp" img="https://images.pexels.com/photos/5490778/pexels-photo-5490778.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post category="Nature" img="https://images.pexels.com/photos/4916559/pexels-photo-4916559.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post category="Computer Science" img="https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297__340.jpg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=940"/>

    </div>
  );
}
