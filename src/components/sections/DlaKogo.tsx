import { glass, APP_REGISTER } from '../../constants'
import CheckIcon from '../CheckIcon'
import { useLanguage } from '../../i18n'

export default function DlaKogo() {
  const { lang } = useLanguage()
  const en = lang === 'en'

  const golferItems = en ? [
    'You want to improve your game but don\'t know where to start',
    'You want access to your Rounds and Statistics',
    'You want to connect with the best Coaches',
    'You want to consult your game with a Coach because your current training isn\'t affecting your scores',
    'You want to improve your game and lower your Handicap',
    'You want to win your first tournament',
  ] : [
    'Chcesz poprawić swoją grę i nie wiesz od czego zacząć',
    'Chcesz mieć wgląd w swoje Rundy i Statystyki',
    'Chcesz mieć kontakt z najlepszymi Trenerami',
    'Chcesz skonsultować swoją grę z Trenerem, bo masz wrażenie, że obecny trening nie wpływa na Twoje wyniki',
    'Chcesz poprawić swoją grę i zbić Handicap',
    'Chcesz wygrać swoje pierwsze zawody',
  ]

  const trainerItems = en ? [
    'You want to stand out among local Coaches',
    'You want a tool to work with your Players',
    'You want their game history, Round Results and Statistics in one place',
    'You want to communicate with Players quickly and in an organised way',
    'You want to plan your Players\' training effectively',
    'You want more Players training with you',
  ] : [
    'Chcesz się wyróżnić wśród lokalnych Trenerów',
    'Chcesz mieć narzędzie do pracy ze swoimi Zawodnikami',
    'Chcesz mieć w jednym miejscu Historię ich gry, Wyniki Rund i Statystyki',
    'Chcesz móc szybko i w uporządkowany sposób komunikować się z Zawodnikami',
    'Chcesz skutecznie planować treningi swoich Zawodników',
    'Chcesz mieć więcej trenujących z Tobą Zawodników',
  ]

  return (
    <section
      id="dla-kogo"
      className="py-10 md:py-24 bg-gradient-to-b from-transparent via-primary/10 to-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">
            {en ? 'Who is GolfStats for?' : 'Dla kogo jest GolfStats?'}
          </h2>
          <div className="w-20 h-1.5 bg-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Golfer */}
          <div className={`relative overflow-hidden rounded-3xl p-10 flex flex-col ${glass}`}>
            <div className="absolute -right-16 -bottom-16 text-[180px] opacity-5 select-none">⛳</div>
            <h3 className="text-3xl font-black text-white mb-2">
              {en ? 'For Amateurs & Professionals' : 'Dla Amatorów i Zawodowców'}
            </h3>
            <p className="text-slate-400 text-sm mb-6 font-medium">{en ? 'If ...' : 'Jeżeli ...'}</p>
            <ul className="space-y-4 flex-1">
              {golferItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-10">
              <a
                href={`${APP_REGISTER}?role=STUDENT`} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-dark font-bold rounded-lg hover:bg-accent transition-all text-center leading-tight"
              >
                {en ? <>Start playing better<br />with GolfStats</> : <>Zacznij grać lepiej<br />z GolfStats</>}
              </a>
            </div>
          </div>

          {/* Trainer */}
          <div className="relative overflow-hidden rounded-3xl p-10 flex flex-col bg-primary/20 border border-primary/50">
            <div className="absolute -right-16 -bottom-16 text-[180px] opacity-5 select-none">🏆</div>
            <h3 className="text-3xl font-black text-white mb-2">
              {en ? 'For Coaches & Instructors' : 'Dla Trenerów i Instruktorów'}
            </h3>
            <p className="text-slate-400 text-sm mb-6 font-medium">{en ? 'If ...' : 'Jeżeli ...'}</p>
            <ul className="space-y-4 flex-1">
              {trainerItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center mt-10">
              <a
                href={`${APP_REGISTER}?role=TRAINER`} target="_blank" rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-white transition-all text-center leading-tight"
              >
                {en ? <>Become a GolfStats<br />Coach</> : <>Zostań Trenerem<br />GolfStats</>}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
