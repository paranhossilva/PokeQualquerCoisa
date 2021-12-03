using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace PokeQualquerCoisa.Models
{
    class Effect
    {
        private readonly double[,] dano = new double[,] {
            {1, 2, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1},					 //Normal
			{1, 1, 2, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 2},				 //Fighting
		 	{1, 0.5, 1, 1, 0, 2, 0.5, 1, 1, 1, 1, 0.5, 2, 1, 2, 1, 1, 1},				 //Flying
		 	{1, 0.5, 1, 0.5, 2, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0.5},			 //Poison
			{1, 1, 1, 0.5, 1, 0.5, 1, 1, 1, 1, 2, 2, 0, 1, 2, 1, 1, 1},					 //Ground
			{0.5, 2, 0.5, 0.5, 2, 1, 1, 1, 2, 0.5, 2, 2, 1, 1, 1, 1, 1, 1},				 //Rock
			{1, 0.5, 2, 1, 0.5, 2, 1, 1, 1, 2, 1, 0.5, 1, 1, 1, 1, 1, 1},				 //Bug
			{0, 0, 1, 0.5, 1, 1, 0.5, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1},					 //Ghost
			{0.5, 2, 0.5, 0, 2, 0.5, 0.5, 1, 0.5, 2, 1, 0.5, 1, 0.5, 0.5, 0.5, 1, 0.5},  //Steel
			{1, 1, 1, 1, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 0.5, 1, 1, 0.5},          //Fire
			{1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 2, 2, 1, 0.5, 1, 1, 1},				 //Water
			{1, 1, 2, 2, 0.5, 1, 2, 1, 1, 2, 0.5, 0.5, 0.5, 1, 2, 1, 1, 1},				 //Grass
			{1, 0.5, 1, 1, 2, 1, 1, 1, 0.5, 1, 1, 1, 0.5, 1, 1, 1, 1, 1},				 //Electric
			{1, 0.5, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0.5, 1, 1, 2, 1},					 //Psychic
			{1, 2, 1, 1, 1, 2, 1, 1, 2, 2, 1, 1, 1, 1, 0.5, 1, 1, 1},					 //Ice
			{1, 1, 1, 1, 1, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 2, 2, 2, 1},				 //Dragon
			{1, 2, 1, 1, 1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0, 1, 1, 0.5, 2},					 //Dark
			{1, 0.5, 1, 2, 1, 1, 0.5, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0.5, 1}                 //Fairy
		};

        private readonly String[] tipos = new String[] {
            "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel", "fire", "water", "grass", "electric", "psychic", "ice", "dragon", "dark", "fairy"
        };

        private String[,] show = new String[18, 2];

        private double[] novoDano;

        private int index;

        public String[,] Show { get => show; }

        public Effect(List<object> obj)
        {
            if (obj.Count == 1)
            {
                Root root = JsonConvert.DeserializeObject<Root>(obj[0].ToString());

                index = Array.IndexOf(tipos, root.type.name);

                for (int i = 0; i < 18; i++)
                {
                    setShow(dano[index, i], i);
                }
            }
            else
            {
                setNovoDano(obj);

                for (int i = 0; i < 18; i++)
                {
                    setShow(novoDano[i], i);
                }
            }
        }

        public Effect() { }

        private void setShow(double dano, int i)
        {
            switch (dano)
            {
                case 0:
                    show[i, 0] = "Sem Efeito";
                    show[i, 1] = "#960F2C";
                    break;

                case 1:
                    show[i, 0] = "Normal";
                    show[i, 1] = "#0F7598";
                    break;

                case 2:
                    show[i, 0] = "Efetivo";
                    show[i, 1] = "#009F10";
                    break;

                case 4:
                    show[i, 0] = "Super Efetivo";
                    show[i, 1] = "#95D400";
                    break;

                default:
                    show[i, 0] = "Não Muito Effetivo";
                    show[i, 1] = "#880F98";
                    break;
            }
        }

        private void setNovoDano(List<object> obj)
        {
            novoDano = new double[18];

            Root root = JsonConvert.DeserializeObject<Root>(obj[0].ToString());

            index = Array.IndexOf(tipos, root.type.name);

            for (int i = 0; i < 18; i++)
            {
                novoDano[i] = dano[index, i];
            }

            root = JsonConvert.DeserializeObject<Root>(obj[1].ToString());

            index = Array.IndexOf(tipos, root.type.name);

            for (int i = 0; i < 18; i++)
            {
                novoDano[i] *= dano[index, i];
            }
        }
    }
}
