using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace PokeQualquerCoisa
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class Page : ContentPage
    {
        private String[,] show;
        private static String[] tipos = new String[] {
            "Normal", "Fighting", "Flying", "Poison", "Ground", "Rock", "Bug", "Ghost", "Steel", "Fire", "Water", "Grass", "Electric", "Psychic", "Ice", "Dragon", "Dark", "Fairy"
        };

        public Page(String[,] show)
        {
            InitializeComponent();

            this.show = new String[18, 2];

            this.show = show;

            criaGrid();
        }

        private void criaGrid()
        {
            for (int i = 0; i < 19; i++)
            {
                tabela.RowDefinitions.Add(new RowDefinition(){ Height = GridLength.Auto});
            }

            tabela.ColumnDefinitions.Add(new ColumnDefinition() { Width = new GridLength(4, GridUnitType.Star) });
            tabela.ColumnDefinitions.Add(new ColumnDefinition() { Width = new GridLength(6, GridUnitType.Star) });
                        

            tabela.Children.Add(criaLabel("Tipo"), 0, 0);
            tabela.Children.Add(criaLabel("Eficiência"), 1, 0);

            for (int i = 1; i < 19; i++)
            {
                for (int j = 0; j < 2; j++)
                {
                    if (j == 0)
                        tabela.Children.Add(criaLabel(tipos[i - 1], "#303030"), j, i);
                    else
                        tabela.Children.Add(criaLabel(show[i - 1, 0], show[i - 1, 1]), j, i);
                }
            }
        }

        private Label criaLabel(String texto)
        {
            return new Label
            {
                Text = texto,
                FontSize = 25,
                HorizontalTextAlignment = TextAlignment.Center,
                BackgroundColor = Color.FromHex("#303030")
            };
        }

        private Label criaLabel(String texto, String cor)
        {
            return new Label
            {
                Text = texto,
                FontSize = 15,
                HorizontalTextAlignment = TextAlignment.Center,
                BackgroundColor = Color.FromHex(cor)
            };
        }
    }
        
}