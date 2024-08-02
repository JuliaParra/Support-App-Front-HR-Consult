import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import NuevaSolicitud from '../NuevaSolicitud.vue';
import axios from 'axios';
import router from '@/router/index'; 


vi.mock('axios');


global.alert = vi.fn();

describe('NuevaSolicitud.vue', () => {
  beforeEach(async () => {
    vi.resetAllMocks();  
    router.push('/');  
    await router.isReady();  
  });

  it('envía el formulario correctamente', async () => {
    const wrapper = mount(NuevaSolicitud, {
      global: {
        plugins: [router],
      },
    });

    
    await wrapper.find('#nombre').setValue('Juan Perez');
    await wrapper.find('#fecha').setValue('2023-07-30');
    await wrapper.find('#tema').setValue('Consulta General');
    await wrapper.find('#descripcion').setValue('Descripción de la consulta');

   
    axios.post.mockResolvedValue({ status: 200 });

   
    await wrapper.find('form').trigger('submit.prevent');

    
    expect(axios.post).toHaveBeenCalledWith('http://localhost:8080/api/solicitud', {
      nombre: 'Juan Perez',
      fecha: '2023-07-30',
      tema: 'Consulta General',
      descripcion: 'Descripción de la consulta',
    });
  });
});