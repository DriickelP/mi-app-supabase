import { createClient } from '@supabase/supabase-js'

const supabaseUrl = ''
const supabaseKey = ''

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
