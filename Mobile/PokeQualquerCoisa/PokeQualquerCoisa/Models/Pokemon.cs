using System;
using System.Collections.Generic;
using System.Text;

namespace PokeQualquerCoisa.Models
{
    class Pokemon
    {
        public int id { get; set; }
        public String name { get; set; }
        public List<object> types { get; set; }
        public float weight { get; set; }
        public float height { get; set; }
    }

    public class type
    {
        public string name { get; set; }
    }

    public class Root
    {
        public type type { get; set; }
    }
}
