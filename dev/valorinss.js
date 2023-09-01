	function calcularsb(){
	

	var qhoras, vhoras, ndepen, valorGeral, salarioBr, inss, ir , descir,msg;

			qhoras = document.getElementById("qhoras").value;
			vhoras = document.getElementById("vhoras").value;
			ndepen = document.getElementById("ndepen").value;
			
			salarioBr =  qhoras * vhoras;
			ndepen = 189.50 * ndepen;
			

			if((salarioBr>=0) && (salarioBr <= 1751.81))
			{
			inss = salarioBr * 0.08;
			ir = salarioBr - inss;
			
			}
				else if ((salarioBr >= 1751.82) && (salarioBr <= 2919.72))
				{		
					inss = salarioBr * 0.09	
					ir = salarioBr - inss - ndepen
				 }
				 
				else if
					 ((salarioBr >= 2919.73) && (salarioBr <= 5839.45))
					{	
						inss=salarioBr * 0.11
						ir = salarioBr - inss - ndepen
					}
					else 
					{
						inss=642.34
						ir= salarioBr - inss - ndepen
						
					}
					if ((ir>=0) && (ir<1903.99))
					{		descir= 0
						valorGeral = salarioBr - descir - inss
					}
				else if((ir >= 1903.99) && (ir <= 2826.66))
				{
					descir = ir * (0.075) - 142.80
					valorGeral = salarioBr - descir - inss
		 }	
			else
				if(( ir>= 2826.66) && (ir <= 3751.05)){
					descir = ir * 0.15 - 354.80
					valorGeral = salarioBr - descir - inss
		}
			else	
				if((ir >= 3751.06) && (ir <= 4664.68)){
					descir = ir * 0.225 - 636.13
					valorGeral = salarioBr - descir - inss
		}
			else
			{
				if(ir >= 4664.69)
					descir = ir * 0.275 - 869.36
					valorGeral = salarioBr - descir - inss
			}
			msg="Seu salário é:R$ " + salarioBr.toFixed(2);
			document.getElementById("sb").innerHTML=msg;
			document.getElementById("vinss").innerHTML=" inss é:R$" + inss.toFixed(2);
			document.getElementById("ir").innerHTML=" irf é:R$" + descir.toFixed(2);
			document.getElementById("salaril").innerHTML="Seu salario líquido é R$" + valorGeral.toFixed(2);
			
			
		}