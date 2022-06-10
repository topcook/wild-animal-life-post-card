import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import picture1 from './assets/1.png';
import picture2 from './assets/2.png';
import picture3 from './assets/3.jpg';
import picture4 from './assets/4.jpg';
import picture5 from './assets/5.jpg';
import picture6 from './assets/6.jpg';
import picture7 from './assets/7.jpg';
import { Row, Col } from 'react-bootstrap';

import First from './First';
import './App.css';

// const Post = (props) => {
//   const { id } = useParams();
//   const posts = [
//     {
//       id: 1, image: picture1, content: 'You may never know why some people oppress animals or sometimes \
//        other people; it is good to know that merciful people are still existent. A story, \
//        that was shared by the Dodo speaks about the people at Sale Ranch Sanctuary, who saved a pigâs \
//        life. Cherry Blossom, the pig, was finally thrown at animal shelter in California which cares \
//        for dogs and cats in first place, before that she lived in harsh situations, writes thepetneeds.com'
//     },
//     {
//       id: 2, image: picture2, content: 'Cherry Blossom wasnât even expected to survive, \
//       but at least, she completely recovered.'
//     },
//     {
//       id: 3, image: picture3, content: 'Cherry Blossom was abandoned at a shelter placed \
//       near Temecula, California. It is claimed by the man who dropped her off that she \
//       was lost. Jen Sale, CEO, and founder of Sale Ranch Sanctuary said that they \
//       suspected that she was owned and some developed situations caused this incorrect \
//       care. He also added that she had one of the most severe types of mange, which is \
//       sarcoptic mange. It can be fatal, if it is not treated.'
//     },
//     {
//       id: 4, image: picture4, content: 'The shelter workers think that who really brought \
//       Cherry Blossom in was the rancher. He just dropped her off while she needed care. \
//       Jen Sale added. As the shelter doesnât care for pigs, \
//       they called the nearby farm sanctuary.'
//     },
//     {
//       id: 5, image: picture5, content: 'Sale, who has worked with livestock for a long \
//       time, said that the pig lived in very harsh conditions, and also she had \
//       a lot of pain. But, she was very cute with us (Sale and her husband), \
//       we would come to medicine her, and she quickly knew that we were helping her. \
//       She is an ideal image for how loving and forgiving animals are. Cherry began \
//       receiving laser light therapy and healing cream rubs as a veterinarian advised. \
//       After 2 months she became better, and her hair started growing, and the skin is \
//       really good. Sale said that the pigâs personality is also growing, she plays \
//       with the ball, she loved her little clay hole, she also behaves with all.'
//     },
//     {
//       id: 6, image: picture6, content: 'She plays with our dogs, she is a sweetheart, \
//       and all she wants is to get the attention of the people. Sale also added that \
//       weâre blessed and grateful as we were able to bring her and take care of her to be healthy.'
//     },
//     {
//       id: 7, image: picture7, content: 'She plays with our dogs, she is a sweetheart, \
//       and all she wants is to get the attention of the people. Sale also added that \
//       weâre blessed and grateful as we were able to bring her and take care of her to be healthy.'
//     }
//   ];

//   console.log("id: ", id);

//   console.log("content: ", posts[0].content);
//   return (
//     <div className='post-wrapper'>
//       <a href='https://reactjs.org' target={'_blank'}>
//         <img src={posts[id - 1].image} />
//       </a>
//       <div className='description'>
//         {posts[id - 1].content}
//       </div>
//     </div>
//   );
// }

const Article = (props) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className='post-wrapper'>
        <a href='https://wild-animal-life-post.netlify.app/' target={'_blank'}>
          <img src={picture1} />
        </a>
        <div className='description' style={{ textAlign: 'center' }}>
          {`Article ${props.index}:  Abused Piglet Thrown Down At Animal Shelter Has Supernatural Transformation`}
        </div>
      </div>
    </Col>
  );
}

function App() {
  const articles = ['aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa', 'aaa'];
  return (
    <div className="App">
      <h1 style={{textAlign:'center', marginBottom:'0px'}} className='post-wrapper'>Your Page</h1>
      <Row>
        {
          articles.map((item, index) => {
            return (
              <div key={index}>
                <Article index={index + 1} />
              </div>
            )
          })
        }
      </Row>

      {/* <First />
      <BrowserRouter>
        <Routes>
          <Route path={"/post/:id"} element={<Post />} />
        </Routes>
      </BrowserRouter> */}
    </div >
  );
}

export default App;
