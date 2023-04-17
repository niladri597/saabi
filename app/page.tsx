import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'


export default function Home() {
  return (
    <div className="text-white flex flex-col items-center justify-center h-screen px-2">
      <h1 className="text-3xl font-bold mb-20">SAABI AI</h1>

      <div className='flex space-x-2 text-center'>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Sun Icon */}
            <SunIcon className="h-8 w-8" />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"What is Happy New Year 2023 in Bengali?"</p>
            <p className="infoText">"Lyrics of Perfect by Ed Sheeran"</p>
            <p className="infoText">"Write a Java program to make a stopwatch"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Bolt Icon */}
            <BoltIcon className="h-8 w-8" />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"What is Happy New Year 2023 in Bengali?"</p>
            <p className="infoText">"Lyrics of Perfect by Ed Sheeran"</p>
            <p className="infoText">"Write a Java program to make a stopwatch"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* Exclamation Triangle Icon */}
            <ExclamationTriangleIcon className="h-8 w-8" />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">Change the AI Model to use</p>
            <p className="infoText">Messages are stored in Firestore</p>
            <p className="infoText">Hot Toast Notification when SAABI is thinking!</p>
          </div>
        </div>
      </div>
    </div>
  )
}
