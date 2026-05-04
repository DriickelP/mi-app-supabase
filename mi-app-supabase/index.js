import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hsbnnpymgxxcicoxepvk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzYm5ucHltZ3h4Y2ljb3hlcHZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc5MTY2NjMsImV4cCI6MjA5MzQ5MjY2M30.lNQfDeWjYZ1qSpdHX9BSNTCWXRWHrfvIytPNRvtecQ4'

const supabase = createClient(supabaseUrl, supabaseKey)

async function obtenerEstudiantes() {
  const { data, error } = await supabase
    .from('Estudiantes') // <-- ¡Aquí está el cambio! E mayúscula
    .select('*')
    
  if (error) {
    console.log('Error:', error)
  } else {
    console.log('Datos:', data)
  }
}

obtenerEstudiantes()