import { createContext, useContext, useState, type ReactNode } from 'react';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export type Equipo = {
  id: string;
  nombre: string;
  ciudad: string;
  estado: 'Operativo' | 'En mantenimiento' | 'Fuera de servicio';
  descripcionMantenimiento: string;
};

type EquiposContextType = {
  equipos: Equipo[];
  agregarEquipo: (equipo: Omit<Equipo, 'id'>) => void;
};

const EquiposContext = createContext<EquiposContextType | undefined>(undefined);

const EQUIPOS_INICIALES: Equipo[] = [
  {
    id: '1',
    nombre: 'Compresor de Aire Industrial',
    ciudad: 'Bogotá',
    estado: 'Operativo',
    descripcionMantenimiento:
      'Cambio de filtros, revisión de niveles de aceite y limpieza de serpentín de enfriamiento.',
  },
  {
    id: '2',
    nombre: 'Torno CNC T-400',
    ciudad: 'Medellín',
    estado: 'En mantenimiento',
    descripcionMantenimiento:
      'Sustitución de husillo principal, calibración de ejes y lubricación de guías lineales.',
  },
  {
    id: '3',
    nombre: 'Soldadora MIG-500',
    ciudad: 'Cali',
    estado: 'Operativo',
    descripcionMantenimiento:
      'Revisión de alimentador de alambre, limpieza de boquilla y verificación de flujo de gas.',
  },
];

export function useEquipos() {
  const context = useContext(EquiposContext);
  if (!context) {
    throw new Error('useEquipos debe usarse dentro de EquiposProvider');
  }
  return context;
}

export function EquiposProvider({ children }: { children: ReactNode }) {
  const [equipos, setEquipos] = useState<Equipo[]>(EQUIPOS_INICIALES);

  const agregarEquipo = (equipo: Omit<Equipo, 'id'>) => {
    const nuevoEquipo: Equipo = {
      ...equipo,
      id: Date.now().toString(),
    };
    setEquipos((prev) => [...prev, nuevoEquipo]);
  };

  return (
    <EquiposContext.Provider value={{ equipos, agregarEquipo }}>
      {children}
    </EquiposContext.Provider>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <EquiposProvider>
        <Drawer
          screenOptions={{
            headerStyle: { backgroundColor: '#1e3a5f' },
            headerTintColor: '#fff',
            drawerStyle: { backgroundColor: '#f4f6f8' },
            drawerActiveTintColor: '#1e3a5f',
          }}
        >
          <Drawer.Screen
            name="index"
            options={{ drawerLabel: 'Inicio', title: 'Inicio' }}
          />
          <Drawer.Screen
            name="equipos"
            options={{ drawerLabel: 'Equipos Industriales', title: 'Equipos Industriales' }}
          />
          <Drawer.Screen
            name="agregar"
            options={{ drawerLabel: 'Agregar Equipo', title: 'Agregar Equipo' }}
          />
          <Drawer.Screen
            name="novedades"
            options={{ drawerLabel: 'Novedades', title: 'Novedades' }}
          />
        </Drawer>
      </EquiposProvider>
    </GestureHandlerRootView>
  );
}
