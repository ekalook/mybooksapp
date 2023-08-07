import Cards from './Cards';
import '../index.css';
import img1 from "../Assets/images (1).jpg"
import img2 from "../Assets/images (2).jpg"
import img3 from "../Assets/images - Copy.jpg"
import img4 from "../Assets/1.jpg"

const data = [
  {id:1, name: "Oralce Night", image:img1, desc:"idney Ori, the protagonist of this book, miraculously escaped death. Months later, he starts a new life as if he is in Buran - and this is where you realize that a person who has lost his sense of reality, is completely physically exhausted, and stubbornly molasses on the street according to the doctor's advice, has a completely different perception of reality. Everything in life that seems solid, self-acceptable, indigenously rooted is unbearably heavy and big for him (compared to the incorporeal existence of his lama), all roles in life are special, and the writer's craft is the only key through which he can re-enter reality." },
  {id:2, name: "Parfume", image:img2, desc:"the main character of the novel is a strange person who stands out from everyone else.He is gifted with a keen sense of smell. He can even smell a scent that is imperceptible to an ordinary person and therefore does not have a name. Any aroma is equally interesting to him, and Grenouille will study them with intense interest. This is the story of a genius perfumer obsessed with creating the perfect perfume and lust for power, who ultimately becomes a victim of this very perfection." },
  {id:3, name: "Mysteries", image:img3, desc:"This is a novel about the inner conflicts of a person and his place in the outside world,whose main character - an unconventional, double and lonely Nagel is obsessed with the constant, never-ending mystery of love."},
  {id:4, name: "Little Prince", image:img4, desc:"Antoine de Saint-Exupery's The Little Prince is the most popular French-language book and an all-time bestseller,and the author himself has won several of France's highest literary awards. More than half of the work is the author's personal stories, including a heartbreaking story about loneliness, friendship, love and despair, which he tells through the mouth of a little prince who fell to earth." }

]

const CardsList = () => {
  function action(desc) {
    alert(`${desc}`)
  }
return (
  <div className='card-list'>
      {data.map((card) =><Cards key={card.id}  name={card.name} image={card.image} desc={card.desc} action={action}/>)}
  </div>
)
}

export default CardsList