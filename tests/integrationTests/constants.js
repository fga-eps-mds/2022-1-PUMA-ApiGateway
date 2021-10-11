const password = global.URL_GATEWAY;
const agenteExterno = 'Agente Externo';

module.exports = {
  success: {
    aluno: {
      name: 'Luis',
      email: 'luishptaira@gmail.com',
      password,
      repeatpassword: password,
      matricula: 170109208,
      type: 'Aluno',
      externalAgentType: '',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
      cpf: '',
    },
    professor: {
      name: 'Mister M',
      email: 'Mister M@gmail.com',
      password,
      repeatpassword: password,
      matricula: 198298376,
      type: 'Professor',
      externalAgentType: '',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
      cpf: '',
    },
    externalPhysical: {
      name: 'Vandor',
      email: 'vandoropadeiro@gmail.com',
      password,
      repeatpassword: password,
      matricula: '',
      type: agenteExterno,
      externalAgentType: 'Pessoa Fisica',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
      cpf: '12345678901',
    },
    externaljuridical: {
      name: 'Vandor',
      email: 'padariadovandor@gmail.com',
      password,
      repeatpassword: password,
      matricula: '',
      type: agenteExterno,
      externalAgentType: 'Pessoa Juridica',
      cnpj: '12345678901234',
      cep: '12345678',
      companyName: 'Padaria do Vandor',
      socialReason: 'Padaria',
      cpf: '',
    },
  },
  fail: {
    aluno: {
      name: 'Luis',
      email: 'luishptaira2@gmail.com',
      password,
      repeatpassword: password,
      type: 'Aluno',
      externalAgentType: '',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
      cpf: '',
    },
    alunoLoginWithoutPassword: {
      email: 'luishptaira3@gmail.com',
      password: '',
    },
    alunoLoginWithoutemail: {
      email: '',
      password,
    },
    loginUnexistingUser: {
      email: '',
      password,
    },
    professor: {
      name: 'Mister M',
      email: 'Mister M2@gmail.com',
      repeatpassword: password,
      matricula: 198298376,
      type: 'Professor',
      externalAgentType: '',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
      cpf: '',
    },
    externalPhysical: {
      name: 'Vandor',
      email: 'vandoropadeiro3@gmail.com',
      password,
      repeatpassword: password,
      matricula: '',
      type: agenteExterno,
      externalAgentType: 'Pessoa Fisica',
      cnpj: '',
      cep: '',
      companyName: '',
      socialReason: '',
    },
    externaljuridical: {
      name: 'Vandor',
      email: 'padariadovandor4@gmail.com',
      password,
      repeatpassword: password,
      matricula: '',
      type: agenteExterno,
      externalAgentType: 'Pessoa Juridica',
      cnpj: '12345678901234',
      cep: '12345678',
      socialReason: 'Padaria',
      cpf: '',
    },
  },
};