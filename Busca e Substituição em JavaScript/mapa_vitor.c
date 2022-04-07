#include <stdio.h>
#include <stdlib.h>
#include <locale.h>

#define TAM 200
int a, b, i, op;

typedef struct 
{
    int  codigo;
	  char titulo[20];
	  char descricao[100];
	  char ano[4];
    char status [10];
    char gerente[15];
} CadastroProjetos;

void menu (){
	printf("--------------------Cadastro de Projetos--------------------\n\n");
	printf("Escolha uma das opções\n");
  printf("1 - Cadastro de Projetos\n");
  printf("2 - Mostrar todos os Projetos\n");
  printf("3 - Projetos a fazer\n");
  printf("4 - Projetos em execucao\n");
  printf("5 - Projetos concluídos\n");
  printf("6 - Projetos Cancelados\n");
  printf("0 - Encerrar\n");
	scanf("%d", &op);
	fflush(stdin);
	}
	
int main ()
{
	CadastroProjetos cadastroProjetos[TAM];
	a = 0;
	op = 999;
	
	while (op != 0)
	{
		menu ();
		
		if (op == 1)
		{
			system("cls");
			
			if (a < TAM)
			{
				printf("-------------------- Cadastro de Projetos --------------------\n");
				b = rand() % 200;
				cadastroProjetos[a].codigo = b;
        printf("Código do projeto: %d \n", b);

				printf("Digite o titulo dos Projetos\n");
        fgets(cadastroProjetos[a].titulo, 20, stdin);
				printf("\n");
        fflush(stdin);
				
        printf("Digite a descricao dos Projetos\n");
				fgets(cadastroProjetos[a].descricao, 100, stdin);
				printf("\n");
				fflush(stdin);
			  
        printf("Digite o ano dos Projetos\n");
				fgets(cadastroProjetos[a].ano, 4, stdin);
				printf("\n");
				fflush(stdin);
        
        printf("Digite o status dos Projetos\n");
				fgets(cadastroProjetos[a].status, 10, stdin);
				printf("\n");
				fflush(stdin);
        
        printf("Digite o gerente dos Projetos\n");
				fgets(cadastroProjetos[a].gerente, 70, stdin);
				printf("\n");
				fflush(stdin);
				
        a++;
				system("clear");
			}
			else
			{
				printf("\n--------------------Memoria cheia!!!--------------------\n\n");
			}
						
		} //Fechamento da opção 1//
		
		else if (op == 2)
		{
			system("cls");	
			if (a > 0)
      		{
				printf("\n--------------------Mostrar todos os Projetos!!!--------------------\n\n");
				for (i=0; i<=a-1; i++)
				{
					printf("\nCódigo: %d\n", cadastroProjetos[i].codigo);
					printf("Titulo: %s\n",  cadastroProjetos[i].titulo);
					printf("Descricao: %s", cadastroProjetos[i].descricao);
                    printf("Ano: %s", cadastroProjetos[i].ano);
                    printf("Status: %s", cadastroProjetos[i].status);
					printf("Gerente: %s", cadastroProjetos[i].gerente);
				}
			}
						
		} //Fechamento da opção 2//
		
		else if (op == 3)
		{
			system("clear");
			if (a > 0)
      		{
				printf("\n--------------------Projetos a Fazer!!!--------------------\n\n");
			}
						
		} //Fechamento da opção 3//
		
		else if (op == 4)
		{
			system("clear");
				
			if (a > 0)
      		{
				printf("\n--------------------Projetos em Execução!!!--------------------\n\n");
			}
						
		} //Fechamento da opção 4//
		
		else if (op == 5)
        {
            system("clear");
            if (a > 0)
            {
            	printf("\n--------------------Projetos Concluídos!!!--------------------\n\n");
			}
		}//Fechamento da opção 5//
		
			else if (op == 6)
        {
            system("clear");
            if (a > 0)
            {
            	printf("\n--------------------Projetos Concluídos!!!--------------------\n\n");
			}
		}//Fechamento da opção 6//
		
    
    else if(op < 0 || op > 6)
		{
			system("clear");
			printf("--------------------OPÇÃO INVÁLIDA!!!---------------------\n\n");
			//menu ();
		}		
	}
  printf("-------------------- Programa encerrado. ---------------------\n\n");
	return (0);
}