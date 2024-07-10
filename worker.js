/* Archivo Web Workers es un hilo separado del principal para poder hacer otras tareas ya que javascript es monohilo 
y se pueden ejecutar script en segundo plano. Para trabajos de mucho peso, ayuda, libera trabajos del thread principal 
por seguridad, por rendimiento....*/

import { WebWorkerMLCEngineHandler } from "https://cdn.jsdelivr.net/npm/@mlc-ai/web-llm@0.2.46/+esm"

const handler = new WebWorkerMLCEngineHandler()

self.onmessage = (msg) => {
  handler.onmessage(msg)
}