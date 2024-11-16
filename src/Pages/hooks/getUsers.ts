export async function validateUser(email: string, password:string) {
  try {
    // Llama al backend para obtener la lista de usuarios
    const response = await fetch('http://127.0.0.1:8000/api/users/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Error al obtener los usuarios: ${response.status}`);
    }

    interface User {
      email: string;
      password_hash: string;
    }

    const users: User[] = await response.json();

    // Verifica si el correo y la contraseña coinciden con un usuario
    const user = users.find(
      (u) => u.email === email && u.password_hash === password
    );

    if (user) {
      console.log('Usuario validado:', user);
      return {
        success: true,
        message: 'Usuario autenticado correctamente',
        user,
      };
    } else {
      return {
        success: false,
        message: 'Correo o contraseña incorrectos',
      };
    }
  } catch (error) {
    console.error('Error al validar el usuario:', error);
    return {
      success: false,
      message: 'Ocurrió un error al validar el usuario',
    };
  }
}
