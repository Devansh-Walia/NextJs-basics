import "css-doodle";

export default function Doodle() {
  return (
    <css-doodle class="doodle">
      {`:doodle {
        @grid: 20 / 100vmax;
        grid-gap: 1vmax;
        font-family: sans-serif;
        overflow: hidden;
        background: #000;
        }
        :doodle { --s: 0 }
        :doodle(:hover) { --s: 1 }
        
        @shape: circle;
        transform:
        scale(@r(.2, 1.5))
        translate(@m2.@r(±50%));
        
        background: hsla(@r(360), @r(85%), @r(85%), @r(30%));
        :hover{
        transition: .1s ease;
    transition-delay: @rand(10ms);
        transform: scale(2);
        }`}
    </css-doodle>
  );
}
