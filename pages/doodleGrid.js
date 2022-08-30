import "css-doodle";

export default function DoodleGrid() {
  return (
    <main>
      <ul>
        <li>
          <css-doodle>
            {`:doodle{
              @grid: 1 / 100%;
              background: @doodle(
                @grid: 1 / 100%;
                background-size: 300px 300px;
                background-image: @doodle(
                  :doodle {
                    @grid: 20 / 100%;
                    grid-gap: 1vmax;
                    background: #000;
                    }
                    @shape: @pick('circle', 'clover', ' clover 5', 'heart', 'whale');
            background: hsla(@r(360), @r(85%), @r(85%), @r(30%));
            transform:
            scale(@r(.2, 1.5))
            translate(@m2.@r(±50%));
                );
              );
            }
            `}
          </css-doodle>
        </li>
        <li>
          <css-doodle>{`:doodle{
            @grid: 1 / 100%;
            background: @doodle(
              @grid: 1 / 100%;
              background-color: #f5f8ff;
              background-size:  160px 160px;
              background-image: @doodle(
                :doodle {
                  @grid: 3 / 100%;
                  transform: scale(calc(3 / 2));
                }
                :after, :before {
                  content: '';
                  @size: 100%;
                  border-radius: 50%;
                  position: absolute;
                  border: 3px double #4169E1;
                }
                :before {
                  transform: translate(50%, 50%);
                }
              );
            );
          }
          `}</css-doodle>
        </li>
        <li>
          <css-doodle>{`:doodle{
            @grid: 1 / 100%;
            background-color: #fff;
            background-image: @doodle(
              :doodle {
              @grid: 12 / 100%;
              background: #0a0c27;
            }
            background: hsl(34, 50%, 70%);
            margin: -.5px;
            transition: @r(.5s) ease;
            clip-path: polygon(@pick(
              '0 0, 100% 0, 100% 100%',
              '0 0, 100% 0, 0 100%',
              '0 0, 100% 100%, 0 100%',
              '100% 0, 100% 100%, 0 100%'
            ));
            );
          }`}</css-doodle>
        </li>
        <li>
          <css-doodle>{`:doodle{
            @grid: 1 / 100%;
            background-color: #332B33;
            background-image: @doodle(
            @grid: 1 / 100vw 100vh;
          background-color: #0a0c27;
          background-size: 200px 200px;
          background-image: @doodle(
            @grid: 6 / 100%;
            @size: 4px;
            font-size: 4px;
            color: hsl(@r240, 30%, 50%);
            box-shadow: @m3x5(
              calc(4em - @nx * 1em) calc(@ny * 1em)
                @p(@m3(currentColor), @m2(#0000)),
              calc(2em + @nx * 1em) calc(@ny * 1em)
                @lp
            );
          );
            );
          }`}</css-doodle>
        </li>
        <li>
          <css-doodle>{`:doodle{
            @grid: 1 / 100%;
            background: @doodle(
              :doodle {
                @grid: 8 / 100%;
              }
            @random { border-top: 1px solid #60569e; }
          @random { border-left: 1px solid #60569e; }
        @random(.2) {
          :after {
            content: '';
            background: hsl(@rand(360), 60%, 70%);
            @size: @rand(3px);
          }
        }
            );
          }`}</css-doodle>
        </li>
        <li>
          <css-doodle>{`
            @grid: 10 / 100%;
            background-color: #fff;
            background-image: @doodle(
              :doodle{
                grid: 10/100%;
              }
              background: rgba(96, 86, 158, @rand(.9));
              transition: .2s ease @rand(200ms);
              transform: rotate(@rand(360deg));
              clip-path: polygon(
                    @rand(100%) 0, 100% @rand(100%), 0 @rand(100%)
                  );
            );
          `}</css-doodle>
        </li>
        <li>
          <css-doodle>{`:doodle {
              @grid: 8 / 100%;
              @shape: circle;
          }
              transition: .2s @r(.6s);
              border-radius: @pick(100% 0, 0 100%);
              transform: scale(@r(.25, 1.25));

              background: hsla(
                calc(240 - 6 * @x * @y),
                70%, 68%, @r.8
              );
          `}</css-doodle>
        </li>
        <li>
          <css-doodle seed="1608633329491">{`:doodle{
            @grid: 1 / 100%;
            background: @doodle(
              :doodle {
                @grid: 1 / 10000px;
                transform: scale(1.5) rotate(45deg);
              }
              background-size: 150px 150px;
              background-color: #1d3557;
              background-image: @doodle(
                @grid: 4 / 100%;
                :after {
                  content: '';
                  @size: 100%;
                  position: absolute;
                  background: @doodle(
                    @grid: @p([1-4]) / 100%;
                    @shape: triangle;
                    background: @p(#e63946, #f1faee, #a8dadc, #457b9d);
                    transform: rotate(@p(0, 180deg)) scale(.8);
                  );
                }
              );
            );
          }`}</css-doodle>
        </li>
        <li>
          <css-doodle seed="1608633329491">{`
          @grid: 1x10 / 100%;

          @place: center;
          @size: calc(@i * 10%);
          
          border-radius: 50%;
          border-style: dashed;
          border-width: calc(@i * 4px);
          border-color: hsla(
            calc(20 * @i), 70%, 68%,
            calc(3 / @i * .8)
          );
          
          transform: rotate(@r(360deg));
          `}</css-doodle>
        </li>
      </ul>
    </main>
  );
}
