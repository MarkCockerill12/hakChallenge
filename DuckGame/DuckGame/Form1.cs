using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Runtime.Remoting.Messaging;
using System.Security.Cryptography;
using System.Security.Principal;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace DuckGame
{
    public partial class Form1 : Form
    {
        //ATM Identifiers
        string[] brandName;
        string[] atmNum;

        //Location Identifiers
        string[] streetName;
        string[] country;
        string[] townName;
        string[] postCode;
        string[] longitude;
        string[] lattitude;




        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
    }
}
